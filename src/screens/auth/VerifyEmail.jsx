import { View, Text, SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../components/Toast";
import { AntDesign } from "@expo/vector-icons";

const VerifyEmail = () => {
  const { navigate } = useNavigation();
  const { email } = useSelector((state) => state.phonenumber);
  console.log("🚀 ~ VerifyEmail ~ email:", email);
  const toastRef = useRef(null);

  const showInfo = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "info", 400);
    });
  };
  function handleHide() {
    console.log("toast is hidden");
  }
  const handleLaterPress = () => {
    showInfo("Please Verify your email later.");
    setTimeout(() => {
      navigate("EmailVerified");
    }, 2000);
  };

  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={10} />

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
              <Button onPress={() => navigate("Register")}>
              <AntDesign name="arrowleft" size={20} color="black" />
              </Button>
            </View>
          </View>

          <View style={{ padding: 20, gap: 10 }}>
            <Text style={styles.ImageText}>Verify your Email</Text>
            <Text style={styles.ImageSubText}>
              Please check our inbox and tap the link in the email we’ve just
              sent to:
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.email}>{email}</Text>
            <Button
              mode='text'
              onPress={() => showInfo("Verification email sent")}
            >
              <Text style={styles.email}>Resend</Text>
            </Button>
          </View>
        </Animatable.View>
        <View style={styles.buttonContainer}>
          <Button mode='text' onPress={handleLaterPress}>
            <Text style={styles.email}>I'll do it later</Text>
          </Button>
          <Button
            style={styles.button}
            mode='contained'
            onPress={() => navigate("EmailVerified")}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VerifyEmail;
const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS == "ios" ? 10 : 30,
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 50,
  },
  imageContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  email: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000",
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
  },
  ImageSubText: {
    color: "#333333",
    fontSize: 15,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },

  button: {
    // marginTop: 50,
    width: "90%",
    backgroundColor: "#090A2A",
  },

  buttonText: {
    color: "#F8D10E",
  },
});
