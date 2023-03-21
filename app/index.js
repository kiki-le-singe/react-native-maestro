import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Link, useNavigation } from "expo-router";

import { useAuth } from "../context/auth";
import sleep from "../utils/sleep";

export default function Index() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  React.useEffect(() => {
    const handleSigInModal = async () => {
      await sleep(100);

      if (!user) {
        navigation.navigate("(auth)/sign-in-modal");
      } else {
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }

      setIsLoading(false);
    };

    handleSigInModal();
  }, [user, navigation]);

  function handleSignOut() {
    setIsLoading(true);
    signOut();
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : user ? (
        <>
          <View>
            <Text style={styles.userInfos}>Hello {user.name}</Text>
            <Text style={styles.userInfos}>{user.email}</Text>
          </View>
          <Link href="/details" style={styles.link}>
            Go to Details screen
          </Link>
          <Text style={styles.signOut} onPress={handleSignOut}>
            Sign Out
          </Text>
        </>
      ) : (
        <Link href="/(auth)/sign-in-modal">Sign In</Link>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfos: {
    color: "green",
    fontWeight: "bold",
  },
  signOut: {
    backgroundColor: "#fa6945",
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    color: "white",
    fontWeight: "bold",
  },
  link: {
    color: "#006edc",
    fontWeight: "bold",
    marginVertical: 20,
  },
});
