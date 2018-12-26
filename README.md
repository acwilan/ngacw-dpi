# DPI Validator for AngularJS

## Description

This is a directive for DPI (Documento Personal de Identificación, something like a SSN in Guatemala).

## Downloading

You may use it as a bower component:

```
bower install ngacw-dpi
```

Or alternatively:

```
npm install angular-dpi-validator
yarn add angular-dpi-validator
```

You may as well download the [javascript file](src/ngacw-dpi.js) and use it yourself.

## Usage

First of all, you need to include the script in your HTML file.

```
<script type="text/javascript" src="node_modules/ngacw-dpi/src/ngacw-dpi.directive.js"></script>
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