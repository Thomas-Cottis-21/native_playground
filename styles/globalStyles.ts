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
    },
    button: {
      fontSize: 20,
      backgroundColor: 'black',
      margin: 20,
      borderRadius: 10
    },
    buttonText: {
      color: 'white',
      fontFamily: 'SourceCodePro',
      fontSize: 15,
      padding: 20,
      textAlign: 'center'
    }
});

export default globalStyles;