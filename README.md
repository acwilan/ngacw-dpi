# CUI Validator for AngularJS

## Description

This is a directive for CUI (Código Único de Identificación, something like a SSN in Guatemala).

## Downloading

You may use it as a bower component:

```
bower install verynicetech/nt-cui-validator
```

Or alternatively:

```
bower install angular-cui-validator
```

You may as well download the [javascript file](src/angular-cui-validator.js) and use it yourself.

## Usage

First of all, you need to include the script in your HTML file.

```
<script type="text/javascript" src="bower_components/angular-cui-validator/src/angular-cui-validator.js"></script>
```

Then, you need to modify your `app.js` file to include the dependency.

```
angular.module('yourModuleName', ['nicetech.directives'])
```

Finally, add it as an attribute to your inputs or components that depend on `ng-model`.

```
<input type="text" ng-model="cui" cui />
```

Cheers!