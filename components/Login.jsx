import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import {
  TextInput,
  Button,
  Divider,
  Avatar,
  Surface,
} from "react-native-paper";

function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(true);
    setTimeout(() => setPasswordVisible(false), 3000); // Reset visibility after 3 seconds
  };

  const SignIn = () => {
    props.navigation.navigate("go-Menu");
  };

  const SignUp = () => {
    props.navigation.navigate("go-Registration");
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <View>
          <Avatar.Image
            size={80}
            source={require("../assets/user.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label="Enter your Username"
            mode="outlined"
            value={credentials.username}
            onChangeText={(text) =>
              setCredentials({ ...credentials, username: text })
            }
            style={styles.input}
          />
          <TextInput
            label="Enter your Password"
            mode="outlined"
            secureTextEntry={!passwordVisible}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye-off" : "eye"}
                onPress={togglePasswordVisibility}
              />
            }
            value={credentials.password}
            onChangeText={(text) =>
              setCredentials({ ...credentials, password: text })
            }
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            icon="login"
            mode="contained"
            style={styles.signInButton}
            onPress={SignIn}
          >
            Sign In
          </Button>

          <Divider bold style={styles.divider} />

          <TouchableWithoutFeedback onPress={SignUp}>
            <Text style={styles.signUpText}>
              Don't have an account?{" "}
              <Text style={styles.signUpLink}>Sign up</Text>
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </Surface>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
  },
  surface: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
    elevation: 4,
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },
  avatar: {
    alignSelf: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  signInButton: {
    borderRadius: 30,
    paddingVertical: 10,
    width: "100%",
  },
  divider: {
    marginVertical: 20,
    width: "100%",
  },
  signUpText: {
    fontSize: 16,
    color: "#757575",
  },
  signUpLink: {
    color: "#6200ee", // Theme primary color
    fontWeight: "bold",
    textDecorationLine: "underline", // Underline for emphasis
  },
});

export default Login;
