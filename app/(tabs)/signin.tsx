import * as React from "react";
import { View, StyleSheet, Image, Text, TextInput, Button, TouchableOpacity } from "react-native";

function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMethod="auto"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9929ba6ce369828e51f8f1d43c13d616ae520c83666e2f866a720957375b3cf7?apiKey=7b0e3053205443f8b9241f2028e47d5c&" }}
            style={styles.mainImage}
          />
          <View style={styles.divider} />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Sign in to your account</Text>
          <Text style={styles.instruction}>Enter your email</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="" />
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="" secureTextEntry />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Sign in with email</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.hr} />
            <Text style={styles.orText}>or continue with</Text>
            <View style={styles.hr} />
          </View>
          <TouchableOpacity style={styles.providerButton}>
            <Image
              resizeMethod="auto"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/531ba74f60e38b17b8d38d66fa6562c15d6833f8b5903891e7f12d2cdcea037d?apiKey=7b0e3053205443f8b9241f2028e47d5c&" }}
              style={styles.providerImage}
            />
            <Text style={styles.providerButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipAccountButton}>
            <Text style={styles.skipAccountText}>I don’t want to use account</Text>
          </TouchableOpacity>          
          <Text style={styles.createAccount}>
            Don’t have account yet?{" "}
            <Text style={{ color: "rgba(0,0,0,1)" }}>
              Create Account here!
            </Text>
            <Text>
              {"\n\n"}By clicking continue, you agree to our{" "}
              <Text style={{ color: "rgba(0,0,0,1)" }}>Terms of Service</Text>{" "}
              and <Text style={{ color: "rgba(0,0,0,1)" }}>Privacy Policy</Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", backgroundColor: "#FFF" },
  leftContainer: { flex: 1, justifyContent: "center", padding: 80 },
  imageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 137,
  },
  mainImage: { width: 666, aspectRatio: 8.33, alignSelf: "center" },
  divider: { height: 645, width: 1, backgroundColor: "#B0B0B0" },

  rightContainer: { flex: 1, padding: 80, justifyContent: "center" },
  formWrapper: { maxWidth: 400, alignSelf: "center" },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
  },
  instruction: { textAlign: "center", marginBottom: 8 },
  label: { color: "#828282", marginVertical: 8 },
  input: {
    height: 40,
    borderColor: "rgba(224, 224, 224, 1)",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  submitButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  submitButtonText: { color: "#FFF", fontWeight: "500" },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  hr: { height: 1, flex: 1, backgroundColor: "#E6E6E6" },
  orText: { marginHorizontal: 8, color: "#828282" },

  providerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 24,
  },
  providerImage: { width: 20, aspectRatio: 1 },
  providerButtonText: { marginLeft: 14, fontWeight: "500", flex: 1 },

  skipAccountButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 24,
  },
  skipAccountText: { marginLeft: 14, fontWeight: "500", flex: 1 },
  createAccount: { textAlign: "center", marginTop: 18, color: "#828282" },
});

export default SignIn;