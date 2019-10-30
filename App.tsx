import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";

export default function App() {
  const [loginName, updateLoginName] = React.useState("");
  const [password, updatePassword] = React.useState("");
  let passwordInput;

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{ padding: 10, paddingBottom: 30 }}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email"
          placeholderTextColor="rgba(225,225,225,0.7)"
          onChangeText={text => updateLoginName(text)}
          value={loginName}
        />
        <TextInput
          ref={input => (passwordInput = input)}
          style={styles.input}
          returnKeyType="go"
          placeholder="Password"
          placeholderTextColor="rgba(225,225,225,0.7)"
          secureTextEntry
          onSubmitEditing={() =>
            Alert.alert(`TextInput submit ${loginName}/${password}`)
          }
          onChangeText={text => updatePassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            Alert.alert(`Simple Button pressed ${loginName}/${password}`)
          }
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "stretch",
    backgroundColor: "#2c3e50"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});
