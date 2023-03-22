import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { useAuth } from "../../context/auth";
import colors from "../../utils/colors";

export default function SignIn() {
  const { signIn } = useAuth();
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Hello!</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
        placeholderTextColor={colors.BLUE}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        placeholderTextColor={colors.BLUE}
        secureTextEntry
      />

      <Button title="Sign In" color={colors.GREEN} onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BLACK,
  },
  titleScreen: {
    fontSize: 34,
    color: colors.WHITE,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: colors.BLUE,
    borderRadius: 8,
    padding: 10,
    color: colors.WHITE,
    fontWeight: "bold",
  },
});
