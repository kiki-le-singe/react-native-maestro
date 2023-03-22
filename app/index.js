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
            <Text style={styles.userInfos}>
              Hello <Text style={styles.name}>{user.name}</Text>
            </Text>
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
    backgroundColor: "rgba(51, 51, 51, 0.9)",
  },
  userInfos: {
    color: "white",
    fontWeight: "bold",
  },
  name: {
    color: "rgba(210, 238, 130, 1)",
    fontWeight: "bold",
  },
  signOut: {
    backgroundColor: "rgba(243, 83, 105, 1)",
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    color: "white",
    fontWeight: "bold",
  },
  link: {
    color: "rgba(13, 180, 185, 1)",
    fontWeight: "bold",
    marginVertical: 20,
  },
});
