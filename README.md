# React Native Enzyme Configuration Instructions:

1.  npm i --save-dev enzyme enzyme-adapter-react-16 react-native-mock
2.  npm install react-dom
3.  Add the following to your package.json:

    "setupFiles": [
    "<rootDir>/src/tempPolyfills.js",
    "<rootDir>/src/setupTests.js"
    ]

Add the following parameters to scripts/test in your package.json:
"test": "jest --verbose --watchAll"
