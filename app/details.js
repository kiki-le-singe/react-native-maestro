import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import colors from "../utils/colors";

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
        "<Text style={styles.italic}>Lorem ipsum</Text> dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud{" "}
        <Text style={styles.link}>exercitation</Text> ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate <Text style={styles.italic}>velit</Text> esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in <Text style={styles.link}>culpa</Text> qui officia
        deserunt mollit anim id est laborum."
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
        tempor incididunt ut labore et dolore magna{" "}
        <Text style={styles.italic}>aliqua</Text>. Ut enim ad minim veniam, quis
        nostrud exercitation <Text style={styles.link}>ullamco laboris</Text>{" "}
        nisi ut <Text style={styles.link}>aliquip</Text> ex ea commodo
        consequat. <Text style={styles.italic}>Duis</Text> aute irure dolor in
        reprehenderit in voluptate <Text style={styles.link}>velit</Text> esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt{" "}
        <Text style={styles.italic}>mollit anim id est laborum.</Text>"
      </Text>

      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/3000/2000" }}
      />

      <Text style={styles.text}>
        "<Text style={styles.link}>Lorem ipsum</Text> dolor sit{" "}
        <Text style={styles.italic}>amet</Text>, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et{" "}
        <Text style={styles.italic}>dolore</Text> magna aliqua."
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.BLACK_II },
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
    color: colors.WHITE,
    fontWeight: "bold",
  },
  link: {
    color: colors.BLUE,
  },
  italic: {
    color: colors.GREEN,
    fontStyle: "italic",
  },
});
