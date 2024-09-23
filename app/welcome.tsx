import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  const route = useRouter();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.pageContainer}>
        <Image
          source={{ uri: "https://www.nemboobill.com/assets/design1.png" }}
          style={styles.image}
        />

        <Text style={styles.title}>Gets things done with to do</Text>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Enim.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => route.push("/register")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 120,
  },
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#4A4A4A",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#00A5B8",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Welcome;
