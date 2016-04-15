angular.module('nicetech.directives', [])
    .directive('cui', function () {
        function clearValue(value) {
            if (!value) {
                return value;
            }
            return value.trim().toUpperCase().replace(/[^\d]/g, '');
        }

        function applyCuiMask(modelValue) {
            if (!modelValue) {
                return modelValue;
            }
            var value = modelValue.toString().trim();
            if (value.length > 0) {
                if (value.length >= 4) {
                    value = value.substr(0, 4) + '-' + value.substr(4);
                }
                if (value.length >= 10) {
                    value = value.substr(0, 10) + '-' + value.substr(10);
                }
            }

            return value;
        }

        // Funcion basada en http://jsfiddle.net/miguelerm/tp0t481o/ por Miguel Roman @miguelerm
        function validCui(modelValue) {
            // En caso de que no venga valor, no se realiza la validacion
            if (!modelValue) {
                return true;
            }
            var cui = modelValue.toString();
            var cuiRegExp = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;

            if (!cuiRegExp.test(cui)) {
                return false;
            }

            cui = cui.replace(/\s/, '');
            var depto = parseInt(cui.substring(9, 11), 10);
            var muni = parseInt(cui.substring(11, 13), 10);
            var numero = parseInt(cui.substring(0, 8), 10);
            var verificador = parseInt(cui.substring(8, 9), 10);
            
            // Se asume que la codificación de Municipios y 
            // departamentos es la misma que esta publicada en 
            // http://goo.gl/EsxN1a

            // Listado de municipios actualizado segun:
            // http://goo.gl/QLNglm

            // Este listado contiene la cantidad de municipios
            // existentes en cada departamento para poder 
            // determinar el código máximo aceptado por cada 
            // uno de los departamentos.
            var munisPorDepto = [ 
                /* 01 - Guatemala tiene:      */ 17 /* municipios. */, 
                /* 02 - El Progreso tiene:    */  8 /* municipios. */, 
                /* 03 - Sacatepéquez tiene:   */ 16 /* municipios. */, 
                /* 04 - Chimaltenango tiene:  */ 16 /* municipios. */, 
                /* 05 - Escuintla tiene:      */ 13 /* municipios. */, 
                /* 06 - Santa Rosa tiene:     */ 14 /* municipios. */, 
                /* 07 - Sololá tiene:         */ 19 /* municipios. */, 
                /* 08 - Totonicapán tiene:    */  8 /* municipios. */, 
                /* 09 - Quetzaltenango tiene: */ 24 /* municipios. */, 
                /* 10 - Suchitepéquez tiene:  */ 21 /* municipios. */, 
                /* 11 - Retalhuleu tiene:     */  9 /* municipios. */, 
                /* 12 - San Marcos tiene:     */ 30 /* municipios. */, 
                /* 13 - Huehuetenango tiene:  */ 32 /* municipios. */, 
                /* 14 - Quiché tiene:         */ 21 /* municipios. */, 
                /* 15 - Baja Verapaz tiene:   */  8 /* municipios. */, 
                /* 16 - Alta Verapaz tiene:   */ 17 /* municipios. */, 
                /* 17 - Petén tiene:          */ 14 /* municipios. */, 
                /* 18 - Izabal tiene:         */  5 /* municipios. */, 
                /* 19 - Zacapa tiene:         */ 11 /* municipios. */, 
                /* 20 - Chiquimula tiene:     */ 11 /* municipios. */, 
                /* 21 - Jalapa tiene:         */  7 /* municipios. */, 
                /* 22 - Jutiapa tiene:        */ 17 /* municipios. */ 
            ];
            
            if (depto === 0 || muni === 0) {
                // Departamento o municipio invalidos
                return false;
            }
            
            if (depto > munisPorDepto.length) {
                // CUI con código de departamento inválido.
                return false;
            }
            
            if (muni > munisPorDepto[depto - 1]) {
                // CUI con código de municipio inválido.
                return false;
            }
            
            // Se verifica el correlativo con base 
            // en el algoritmo del complemento 11.
            var total = 0;
            
            for (var i = 0; i < numero.length; i++) {
                total += numero[i] * (i + 2);
            }
            
            var modulo = (total % 11);
            
            // console.log("CUI con módulo: " + modulo);
            return modulo === verificador;
        }

        return {
            restrict: 'A',
            require: '?ngModel',
            link: function postLink(scope, element, attrs, ctrl) {
                ctrl.$formatters.push(function (value) {
                    return applyCuiMask(value);
                });

                ctrl.$parsers.push(function (value) {
                    if (!value) {
                        return value;
                    }

                    var cleanValue = clearValue(value);
                    var formatedValue = applyCuiMask(cleanValue);

                    if (ctrl.$viewValue !== formatedValue) {
                        ctrl.$setViewValue(formatedValue);
                        ctrl.$render();
                    }

                    return clearValue(formatedValue);
                });

                ctrl.$validators.validcui = function (modelValue) {
                    if (ctrl.$isEmpty(modelValue)) {
                        return true;
                    }
                    return validCui(modelValue);
                };
            }
        };
    });