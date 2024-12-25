import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import {
  TextInput,
  Button,
  Divider,
  Avatar,
  Surface,
} from "react-native-paper";

function Profile(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNo: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(true);
    setTimeout(() => setPasswordVisible(false), 3000); // Reset visibility after 3 seconds
  };

  const Register = () => {
    props.navigation.navigate("go-Login");
  };

  const SignIn = () => {
    props.navigation.navigate("go-Login");
  };

  const Profile = () => {
    props.navigation.navigate("go-Menu");
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
            label="Enter your Email"
            mode="outlined"
            value={credentials.email}
            keyboardType="email-address"
            onChangeText={(text) =>
              setCredentials({ ...credentials, email: text })
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
          <TextInput
            label="confirm Password"
            mode="outlined"
            secureTextEntry={!passwordVisible}
            right={
              <TextInput.Icon
                icon={passwordVisible ? "eye-off" : "eye"}
                onPress={togglePasswordVisibility}
              />
            }
            value={credentials.confirmPassword}
            onChangeText={(text) =>
              setCredentials({ ...credentials, confirmPassword: text })
            }
            style={styles.input}
          />
          <TextInput
            label="Enter your Contact Number"
            mode="outlined"
            value={credentials.contactNo}
            keyboardType="phone-pad"
            onChangeText={(text) =>
              setCredentials({ ...credentials, contactNo: text })
            }
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            icon="login"
            mode="contained"
            style={styles.signInButton}
            onPress={Register}
          >
            Register
          </Button>

          <Divider bold style={styles.divider} />

          <TouchableWithoutFeedback onPress={SignIn}>
            <Text style={styles.SignInText}>
              Already Registered ! Login Here{" "}
              <Text style={styles.SignInLink}>Sign In</Text>
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View>
          <Text>Profile</Text>
          <Button onPress={Profile}> Menu</Button>
        </View>
      </Surface>
    </View>
  );
}

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
  SignInText: {
    fontSize: 16,
    color: "#757575",
  },
  SignInLink: {
    color: "#6200ee", // Theme primary color
    fontWeight: "bold",
    textDecorationLine: "underline", // Underline for emphasis
  },
});

export default Profile;
