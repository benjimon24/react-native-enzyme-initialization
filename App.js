import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    const setupFiles = `\"setupFiles\": \[
      \"<rootDir>/src/tempPolyfills.js\"\,
      \"<rootDir>/src/setupTests.js\"
    \]`;

    const scripts = `"test": "jest --verbose --watchAll"`;

    return (
      <View style={styles.container}>
        <Text>npm i --save-dev enzyme enzyme-adapter-react-16 react-native-mock</Text>
        <Text>npm install react-dom</Text>
        <Text>Add the following to your package.json:</Text>
        <Text> {setupFiles}</Text>
        <Text>Add the following parameters to scripts/test in your package.json:</Text>
        <Text> {scripts}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
