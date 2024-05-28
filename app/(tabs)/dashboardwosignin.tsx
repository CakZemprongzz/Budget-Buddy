import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSection />
      <ImageSection />
    </View>
  );
};

const HeaderSection = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMethod="auto"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ba58a23d9e66b73a78383fb5aff438efdfc368ed096b77305b8b6174c3f1985?apiKey=7b0e3053205443f8b9241f2028e47d5c&" }}
        style={styles.logoImage}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Sign In</Text>
      </View>
    </View>
  );
};

const ImageSection = () => {
  const imageSources = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/73b6d9b97f2629130fba489851f222add5cc62558346a990370711c4fd437e70?apiKey=7b0e3053205443f8b9241f2028e47d5c&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/aad1313839948b41a7310e56b85acd9060ee7eb207808e1153ba707142cc2e9d?apiKey=7b0e3053205443f8b9241f2028e47d5c&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ae4b7c6558131f69bbcdebfb0eecc27dcbc5d0dacda9a8bd081a34c9e53a0383?apiKey=7b0e3053205443f8b9241f2028e47d5c&",
  ];

  return (
    <View style={styles.imagesContainer}>
      <View style={styles.verticalImages}>
        {imageSources.map((source, index) => (
          <Image
            key={index}
            resizeMethod="auto"
            source={{ uri: source }}
            style={styles.thumbnailImage}
          />
        ))}
      </View>
      <Image
        resizeMethod="auto"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/df7bb7c61c396b48a73182a844ae5eb1ae2f0dcebbc861fe2e9439256017f30d?apiKey=7b0e3053205443f8b9241f2028e47d5c&" }}
        style={styles.mainImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EBEB",
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#E4E2E2",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  logoImage: {
    width: 100,
    aspectRatio: 1,
  },
  headerTextContainer: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    color: "#828282",
  },
  imagesContainer: {
    alignItems: "center",
    paddingTop: 80,
  },
  verticalImages: {
    backgroundColor: "#EFEFEF",
    marginBottom: 20,
  },
  thumbnailImage: {
    width: 100,
 aspectRatio: 1,
    marginVertical: 5,
  },
  mainImage: {
    aspectRatio: 8.33,
  },
});

export default SignInScreen;