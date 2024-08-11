import { Text, View } from "react-native";
import globalStyles from "@/styles/globalStyles";
import homeStyles from "@/styles/homeStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  
  return (
    <View style={homeStyles.container}>
      <Text style={globalStyles.title}>Welcome to the home screen!</Text>
    </View>
  );
}
