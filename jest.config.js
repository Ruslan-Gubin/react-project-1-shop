const {defaults} = require('jest-config');


const config = {
  "testEnvironment": "jsdom",
      "moduleFileExtensions": [
        "js",
        "json",
        "ts",
        "tsx"
      ],
        "moduleNameMapper": {
          'jsroot/io': '<rootDir>/',
        },
      };
     
      
      module.exports = config;