import { Text, View } from "react-native";
import globalStyles from "@/styles/globalStyles";

export default function Index() {
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Welcome to the home screen!</Text>
    </View>
  );
}
