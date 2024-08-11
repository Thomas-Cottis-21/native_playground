import { useState } from "react";
import { Button, Text, View } from "react-native";
import globalStyles from "@/styles/globalStyles";
import homeStyles from "@/styles/homeStyles";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function Index() {

  const [name, setName] = useState('');
  const [age, setAge] = useState<string>('');

  const handleSubmit = () => {
    console.log({ name, age });
  }

  const validateAge = (value: string) => {

    if (value === '') {
      return '';
    }

    const filteredValue = value.replace(/[^0-9]/g, '');

    const numValue = parseInt(filteredValue, 10);
    if (isNaN(numValue) || numValue > 120) {
      return '120';
    }

    return filteredValue;
  }

  const handleAgeChange = (text: string) => {
    const validAge = validateAge(text);
    setAge(validAge);
  }
  
  return (
    <View style={homeStyles.container}>
      <Text style={globalStyles.title}>Welcome to the home screen!</Text>
      <TextInput 
      style={globalStyles.input}
      placeholder="Name"
      value={name}
      onChangeText={text => setName(text)}/>
      <TextInput 
      style={globalStyles.input}
      keyboardType="numeric"
      placeholder="Age"
      value={age}
      onChangeText={handleAgeChange}/>
      <Button title="Submit" onPress={handleSubmit}/>
    </View>
  );
}
