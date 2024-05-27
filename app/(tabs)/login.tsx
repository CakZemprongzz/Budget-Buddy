import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

interface Props {
  navigation: any; // Use appropriate type for your navigation prop
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        console.log("Attempting to log in with:");
        console.log("Email:", email);
        console.log("Password:", password);

        /*
        try {
            const response = await fetch('https://your-api-url.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log("Login successful:", data);

            // Assuming the navigation upon successful login:
            navigation.navigate('Home'); // Adjust 'Home' to your target route
        } catch (error) {
            console.error("Login failed:", error);
        }
        */
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Budget Buddy</Text>
            <Text style={styles.tagline}>Track Smarter, Save Bigger — Your Personal Finance</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => { setEmail(text); console.log("Email set to:", text); }}
                value={email}
                placeholder="Enter your email"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => { setPassword(text); console.log("Password set to:", text); }}
                value={password}
                placeholder="Password"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text>Sign in with email</Text>
            </TouchableOpacity>
            {/* Add more buttons and functionality as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    tagline: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '100%',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
});

export default LoginScreen;
