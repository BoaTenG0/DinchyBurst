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

import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Login = () => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const toastRef = useRef(null);

  // ref
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ["25%", "20%"], []);
  //callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
    const { email, password } = user;

    if (!email || !password) {
      showError("Please fill all the fields.");
      return;
    }

    navigate("Main");
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        {/* <View style={styles.imageContainer}> */}
        <StatusBar barStyle={"light-content"} />
        <Toast ref={toastRef} onHide={handleHide} left={50} />
        {/* </View> */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <BottomSheetModalProvider>
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
                      <ArrowLeft2 color='#000' />
                    </Button>
                  </View>
                </View>
                {/* <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 80 }}
          > */}
                <View style={{ padding: 20 }}>
                  <Text style={styles.ImageText}>Sign In</Text>
                </View>
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <View style={styles.inputContainer}>
                    <Text style={[styles.label, { marginBottom: 10 }]}>
                      Your email address/Phone number
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
                  <Text
                    style={[
                      styles.label,
                      { paddingHorizontal: 20, marginVertical: 10 },
                    ]}
                  >
                    Password
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
                </KeyboardAvoidingView>
                <View style={styles.imageContainer}>
                  <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleNextPress}
                  >
                    <Text style={styles.buttonText}>Sign In</Text>
                  </Button>
                </View>
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
                  <Button mode='text' onPress={() => navigate("Register")}>
                    <Text style={{ color: "#090A2A" }}>Register</Text>
                  </Button>
                  <Button mode='text' onPress={handlePresentModalPress}>
                    <Text style={{ color: "#090A2A" }}>Forgot Password?</Text>
                  </Button>
                </View>
                <BottomSheetModal
                  ref={bottomSheetModalRef}
                  index={1}
                  snapPoints={snapPoints}
                  onChange={handleSheetChanges}
                >
                  <BottomSheetView style={styles.contentContainer}>
                    <View style={styles.row}>
                      <MaterialCommunityIcons
                        name='email'
                        size={24}
                        color='#aaa'
                        style={styles.icon}
                      />
                      <Text style={{ fontSize: 17 }}>
                        Password Reset via Email 🎉
                      </Text>
                      <View
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 20,
                          backgroundColor: "#FCD310",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button onPress={() => navigate("NewPassword")}>
                          <ArrowRight2 size={19} color='#000' />
                        </Button>
                      </View>
                    </View>
                  </BottomSheetView>
                </BottomSheetModal>
                {/* </ScrollView> */}
              </Animatable.View>
            </View>
          </BottomSheetModalProvider>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
export default Login;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#FFFFFF",
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
    letterSpacing: 5,
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "20%",
  },
});
