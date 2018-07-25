# React Native Enzyme Configuration Instructions:

1.  Install the following npm packages:

```
npm i --save-dev enzyme enzyme-adapter-react-16 react-native-mock
```

```
npm install react-dom
```

2.  Create the following setup files:

src/setupTests.js

```
import requestAnimationFrame from "./tempPolyfills";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
```

src/tempPolyfills.js

```
const requestAnimationFrame = (global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
});

export default requestAnimationFrame;
```

3.  Add the following to your package.json:

```
"setupFiles": [
  "<rootDir>/src/tempPolyfills.js",
  "<rootDir>/src/setupTests.js"
]
```

Add the following parameters to scripts/test in your package.json:

```
  "test": "jest --verbose --watchAll"
```
