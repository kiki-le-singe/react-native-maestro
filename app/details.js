import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/3000/2000" }}
      />

      <Text style={styles.text}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Text>

      <View style={styles.tinyImagesContainer}>
        <Image
          style={styles.tinyImage}
          source={{ uri: "https://picsum.photos/3000/2000" }}
        />
        <Image
          style={styles.tinyImage}
          source={{ uri: "https://picsum.photos/3000/2000" }}
        />
      </View>

      <Text style={styles.text}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Text>

      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/3000/2000" }}
      />

      <Text style={styles.text}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgba(51, 51, 51, 0.9)" },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    aspectRatio: 1,
  },
  tinyImagesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  tinyImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    paddingHorizontal: 20,
    color: "white",
    fontWeight: "bold",
  },
});
