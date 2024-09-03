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
import React, {
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "../../components/Toast";
import PhoneInput from "react-native-international-phone-number";

const UpdateEmail = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("iantubers957@gmail.com");
  const toastRef = useRef(null);

  const handleChange = (field, value) => {
    setEmail((prevState) => ({
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
    if (!email) {
      showError("Please fill the field.");
      return;
    }

    navigate("Profile");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={50} />
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
                <Button onPress={() => navigate("Profile")}>
                <AntDesign name="arrowleft" size={20} color="black" />
                </Button>
              </View>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={styles.ImageText}>Change Email Address</Text>
            </View>

            <Text
              style={[
                styles.label,
                { paddingHorizontal: 20, marginVertical: 10 },
              ]}
            >
              Your email address
            </Text>
            <View style={styles.passwordContainer}>
              <MaterialCommunityIcons
                name='email'
                size={24}
                color='#aaa'
                style={styles.icon}
              />
              <TextInput
                value={email}
                placeholder='Please type your name here...'
                onChangeText={(text) => handleChange("email", text)}
                style={styles.passwordInput}
                placeholderTextColor='grey'
              />
            </View>
          </Animatable.View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              mode='contained'
              onPress={handleNextPress}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default UpdateEmail;
const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS == "ios" ? 10 : 30,
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#FFFFFF",
    position: "relative",
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
  ImageText: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    // lineHeight: 27,
  },
  ImageSubText: {
    // color: "#150E6E",
    fontSize: 17,
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
    marginHorizontal: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  button: {
    // marginTop: 50,
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
});
