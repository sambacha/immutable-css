#!/usr/bin/env node

var cleanCssCli = require('clean-css-cli');

var customPlugin = {
  level1: {
    value: function (propertyName, propertyValue, options) {
      if (propertyName == 'background-image' && propertyValue.indexOf('../valid/path/to') == -1) {
        return propertyValue.replace('url(', 'url(../valid/path/to/');
      } else {
        return propertyValue;
      }
    }
  }
}

return cleanCssCli(process, function (cleanCss) {
  cleanCss.options.plugins.level1Value.push(customPlugin.level1.value);
});
