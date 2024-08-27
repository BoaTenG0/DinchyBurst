import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-native-paper";
import { CloseCircle } from "iconsax-react-native";
import * as Animatable from "react-native-animatable";
import Toast from "../../components/Toast";
import { useDispatch } from "react-redux";
import { setEmail } from "../../reducers/phoneNumberSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  const toastRef = useRef(null);

  const handleChange = (field, value) => {
    setUser((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const showError = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "error", 400);
    });
  };
  function handleHide() {
    console.log("toast is hidden");
  }
  const handleNextPress = () => {
    const { email, name } = user;

    if (!email || !name) {
      showError("Please fill all the fields.");
      return;
    }
    dispatch(setEmail(email));
    navigate("VerifyEmail");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <View style={styles.imageContainer}> */}
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={50} />
      {/* </View> */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Animatable.View animation='fadeInUp' duration={1000}>
            <View style={styles.header}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#FCD310",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button onPress={() => navigate("Feature2")}>
                  <CloseCircle color='#000' />
                </Button>
              </View>
            </View>
            {/* <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: 80 }}
            > */}
            <View style={{ padding: 20 }}>
              <Text style={styles.ImageText}>Get started with BYB</Text>
              <Text style={styles.ImageSubText}>
                Enter your details to register with Burst your Brain
              </Text>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { marginBottom: 10 }]}>
                  Your Full Name
                </Text>
                <TextInput
                  value={user.name}
                  placeholder='Please type your full name here...'
                  onChangeText={(text) => handleChange("name", text)}
                  style={styles.input}
                  placeholderTextColor='grey'
                  autoCapitalize='none'
                  keyboardType='text'
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { marginBottom: 10 }]}>
                  Your email address
                </Text>
                <TextInput
                  value={user.email}
                  placeholder='Please type your email here...'
                  onChangeText={(text) => handleChange("email", text)}
                  style={styles.input}
                  placeholderTextColor='grey'
                  autoCapitalize='none'
                  keyboardType='email-address'
                />
              </View>
            </KeyboardAvoidingView>

            <View
              style={[
                styles.imageContainer,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 13,
                },
              ]}
            >
              <Button mode='text' onPress={() => navigate("Login")}>
                <Text style={{ color: "#090A2A" }}>
                  Already have an account?{" "}
                  <Text style={{ color: "#007B5D", fontWeight: "bold" }}>
                    Sign In
                  </Text>
                </Text>
              </Button>
            </View>

            {/* </ScrollView> */}
          </Animatable.View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              mode='contained'
              onPress={handleNextPress}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default Register;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //   position: "relative",
    paddingBottom: 50,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  ImageText: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    // lineHeight: 27,
    // letterSpacing: 5,
  },
  ImageSubText: {
    // color: "#150E6E",
    fontSize: 10,
    lineHeight: 27,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  inputContainer: {
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  label: {
    // marginBottom: 5,
    fontSize: 14,
    color: "#000",
  },
  input: {
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 12,
    padding: 13,
    // marginVertical: 10,
    // width: "90%",
    // alignSelf: "center",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  passwordInput: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    marginTop: 50,
    width: "90%",
    backgroundColor: "#090A2A",
  },

  buttonText: {
    color: "#F8D10E",
  },
  terms: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  termsText: {
    fontSize: 10,
  },
  errorButton: {
    backgroundColor: "#f00a1d",
    borderRadius: 10,
    width: "80%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
