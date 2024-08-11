import { Text, View } from "react-native";
import globalStyles from "@/styles/globalStyles";
import dataStyles from "@/styles/dataStyles";

export default function Index() {
  
  return (
    <View style={dataStyles.container}>
      <Text style={globalStyles.text}>Welcome to the data screen!</Text>
    </View>
  );
}