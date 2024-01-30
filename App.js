import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedOption, setSelectedOption] = useState(0);

  const radio_props = [
    { label: "Yes", value: 0 },
    { label: "No", value: 1 },
  ];

  const handleSubmission = () => {
    const likeCoffee = selectedOption === 0 ? "like" : "dislike";
    const summary = `My name is ${name}, I am ${age} years old. I ${likeCoffee} coffee.`;

    Alert.alert("Summary", summary);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Your Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.row}>
        <Text>Your Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.row}>
        <Text>Like Coffee?</Text>
        <RadioForm style={styles.radioForm}>
          {radio_props.map((radio, index) => (
            <View key={index} style={styles.radioButton}>
              <RadioButton labelHorizontal={true}>
                <RadioButtonInput
                  obj={radio}
                  index={index}
                  isSelected={selectedOption === index}
                  onPress={(value) => {
                    setSelectedOption(value);
                  }}
                  buttonSize={10}
                  buttonInnerColor={"#000"}
                  buttonOuterColor={"#000"}
                />
                <RadioButtonLabel
                  obj={radio}
                  index={index}
                  labelHorizontal={true}
                  onPress={(value) => {
                    setSelectedOption(value);
                  }}
                  labelStyle={styles.radioButtonLabel}
                />
              </RadioButton>
            </View>
          ))}
        </RadioForm>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmission}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 10,
    padding: 5,
    flex: 1,
  },
  radioForm: {
    marginLeft: 20,
    flexDirection: "row",
  },
  radioButton: {
    marginRight: 20,
  },
  submitButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    alignItems: "center",
  },
  submitButtonText: {
    fontWeight: "bold",
  },
});
