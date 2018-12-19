# DPI Validator for AngularJS

## Description

This is a directive for DPI (Documento Personal de Identificación, something like a SSN in Guatemala).

## Downloading

You may use it as a bower component:

```
bower install acwilan/angular-dpi-validator
```

Or alternatively:

```
bower install angular-dpi-validator
```

You may as well download the [javascript file](src/angular-dpi-validator.js) and use it yourself.

Or if you use npm / yarn

```
npm install angular-dpi-validator
yarn add angular-dpi-validator
```

## Usage

First of all, you need to include the script in your HTML file.

```
<script type="text/javascript" src="bower_components/angular-dpi-validator/src/angular-dpi-validator.js"></script>
```

Then, you need to modify your `app.js` file to include the dependency.

```
angular.module('yourModuleName', ['acw.directives'])
```

Finally, add it as an attribute to your inputs or components that depend on `ng-model`.

```
<input type="text" ng-model="dpi" dpi />
```

Cheers!