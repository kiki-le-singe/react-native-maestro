import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/auth";
import colors from "../../utils/colors";

export default function SignIn() {
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text onPress={handleSignIn}>Sign In</Text>
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
});
