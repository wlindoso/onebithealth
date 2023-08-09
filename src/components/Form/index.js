import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import ResultImc from "../ResultImc/";

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
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.76"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex.: 93.4"
          keyboardType="numeric"
        />
        <Button onPress={() => validationImc()} title="Calcular IMC" />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
