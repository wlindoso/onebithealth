# Arquivo `Readme.md`
Aqui deverá conter uma breve descrição do projeto que estamos desenvolvendo.

```
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Title from "./src/components/Title/";
import Form from "./src/components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 /* queremos utilizar 100% da nossa tela */,
    backgroundColor: "#e0e5e5" /* cor da tela */,
    paddingTop: 80,
  },
});

```
