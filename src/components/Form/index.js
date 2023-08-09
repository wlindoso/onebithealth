import React, { useState } from "react";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null); /* ou React.useState(null) */
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura.");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc(
      (weight / (height * height)).toFixed(2)
    ); /* 2 casas decimais */
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null); /* após calcular, limpa os campos altura e peso */
      setWeight(null);
      setMessageImc("Seu IMC é igual a: ");
      setTextButton("Calcular novamente");
    } else {
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e a altura.");
    }
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.76"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex.: 93.4"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
