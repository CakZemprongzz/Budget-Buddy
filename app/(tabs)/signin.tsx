import * as React from "react";
import { View, StyleSheet, Image, Text, TextInput, Button, TouchableOpacity, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');

function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          resizeMethod="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9929ba6ce369828e51f8f1d43c13d616ae520c83666e2f866a720957375b3cf7?apiKey=7b0e3053205443f8b9241f2028e47d5c&" }}
          style={styles.mainImage}
        />
        <View style={styles.divider} />
      </View>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Sign in to your account</Text>
        <Text style={styles.instruction}>Enter your email</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: width * 0.8, // Responsive width
    height: height * 0.4, // Responsive height
    resizeMode: 'contain',
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  formWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    width: '80%',
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'left',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignIn;
