import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#333',
        fontFamily: 'SourceCodePro',
        fontWeight: '200'
    },
    title: {
      fontSize: 25,
      color: '#000000',
      fontFamily: 'SourceCodePro',
      fontWeight: '200',
      textAlign: 'center'
    },
    input: {
      fontSize: 18,
      fontFamily: 'SourceCodePro',
      width: '90%',
      borderBottomWidth: 2,
      borderBottomColor: 'black'
    }
});

export default globalStyles;