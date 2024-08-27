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
import { ArrowLeft2, ArrowRight2 } from "iconsax-react-native";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "../../components/Toast";
import PhoneInput from "react-native-international-phone-number";

const UpdatePassword = () => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState({
    password: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

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
    const { password, newpassword, confirmpassword } = user;
    if (!password || !newpassword || !!confirmpassword) {
      showError("Please fill up the fields.");
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
                  <ArrowLeft2 color='#000' />
                </Button>
              </View>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={styles.ImageText}>Change Password</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.label,
                  { paddingHorizontal: 20, marginVertical: 10 },
                ]}
              >
                Old Password
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={user.password}
                  placeholder='Please type your password here...'
                  onChangeText={(text) => handleChange("password", text)}
                  style={styles.passwordInput}
                  placeholderTextColor='grey'
                  secureTextEntry={!showPassword}
                />
                <MaterialCommunityIcons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color='#aaa'
                  style={styles.icon}
                  onPress={toggleShowPassword}
                />
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.label,
                  { paddingHorizontal: 20, marginVertical: 10 },
                ]}
              >
                New Password
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={user.newpassword}
                  placeholder='Please type your password here...'
                  onChangeText={(text) => handleChange("newpassword", text)}
                  style={styles.passwordInput}
                  placeholderTextColor='grey'
                  secureTextEntry={!showPassword1}
                />
                <MaterialCommunityIcons
                  name={showPassword1 ? "eye-off" : "eye"}
                  size={24}
                  color='#aaa'
                  style={styles.icon}
                  onPress={toggleShowPassword1}
                />
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.label,
                  { paddingHorizontal: 20, marginVertical: 10 },
                ]}
              >
                Confirm New Password
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={user.confirmpassword}
                  placeholder='Please type your password here...'
                  onChangeText={(text) => handleChange("confirmpassword", text)}
                  style={styles.passwordInput}
                  placeholderTextColor='grey'
                  secureTextEntry={!showPassword2}
                />
                <MaterialCommunityIcons
                  name={showPassword2 ? "eye-off" : "eye"}
                  size={24}
                  color='#aaa'
                  style={styles.icon}
                  onPress={toggleShowPassword2}
                />
              </View>
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
export default UpdatePassword;
const styles = StyleSheet.create({
  safeArea: {
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
