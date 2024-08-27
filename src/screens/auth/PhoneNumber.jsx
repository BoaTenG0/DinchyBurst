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
import { setPhoneNumber } from "../../reducers/phoneNumberSlice";
import PhoneInput from "react-native-international-phone-number";

const PhoneNumber = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("GH");

  const toastRef = useRef(null);

  const showError = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "error", 400);
    });
  };
  function handleHide() {
    console.log("toast is hidden");
  }
  const handlePhoneChange = (value) => {
    setPhone(value);
    dispatch(setPhoneNumber(value));
  };
  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }
  const handleNextPress = () => {
    if (!phone) {
      showError("Please fill the field.");
      return;
    }
    navigate("VerifyPhoneNumber");
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
            <View style={{ padding: 20 }}>
              <Text style={styles.ImageText}>
                Verify your phone number with code
              </Text>
              <Text style={styles.ImageSubText}>
                We’ll send you a code. It helps keep your account secure
              </Text>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.inputContainer}>
                <Text style={[styles.label, { marginBottom: 10 }]}>
                  Your Phone number
                </Text>
                <PhoneInput
                  value={phone}
                  onChangePhoneNumber={handlePhoneChange}
                  defaultCountry='GH'
                  disableCountryChange={true}
                  selectedCountry={selectedCountry}
                  onChangeSelectedCountry={handleSelectedCountry}
                />
              </View>
            </KeyboardAvoidingView>

            {/* </ScrollView> */}
          </Animatable.View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              mode='contained'
              onPress={handleNextPress}
            >
              <Text style={styles.buttonText}>Send Code</Text>
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default PhoneNumber;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //   position: "relative",
    paddingVertical: 50,
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
