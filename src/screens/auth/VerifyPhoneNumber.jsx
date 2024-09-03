import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  StatusBar,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import VerifyCompo from "../../components/VerifyCombo";
import Toast from "../../components/Toast";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import VerifyCode from "../../components/VerifyCode";
import { AntDesign } from "@expo/vector-icons";

const VerifyPhoneNumber = () => {
  const { navigate } = useNavigation();
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const timerRef = useRef(null);
  const toastRef = useRef(null);

  useEffect(() => {
    if (isCodeSent) {
      startTimer();
    } else {
      resetTimer();
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isCodeSent]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimerSeconds(10);

    timerRef.current = setInterval(() => {
      setTimerSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timerRef.current);
          setIsCodeSent(false);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimerSeconds(0);
  };

  const handleResendPress = () => {
    // Logic to resend code goes here
    showSuccess("OTP code sent");
    setIsCodeSent(true);
  };

  const showError = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "error", 400);
    });
  };
  const showSuccess = (message) => {
    toastRef.current?.hide(() => {
      toastRef.current?.show(message, "success", 400);
    });
  };

  const handleNextPress = () => {
    if (!verificationCode) {
      showError("Please enter the code.");
      return;
    }
    navigate("VerifiedPhoneNumber");
  };

  function handleHide() {
    console.log("toast is hidden");
  }
  return (
    <SafeAreaView >
      <StatusBar barStyle={"light-content"} />
      <Toast ref={toastRef} onHide={handleHide} left={50} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <VerifyCompo
            header="We just sent an SMS"
            content="Enter the security code we sent to +233 "
            phone
            wrong
          />
          <View>
            <View>
              <>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {isCodeSent ? (
                    <Text style={[styles.InputTitle]}></Text>
                  ) : (
                    <Pressable onPress={handleResendPress}>
                      <Text style={[styles.InputTitle, { color: "#000" }]}>
                        Didn’t get the code? Resend it
                      </Text>
                    </Pressable>
                  )}
                  {/* {isCodeSent ? (
                    <Text style={[styles.InputTitle]}></Text>
                  ) : verificationCode.length === 4 ? (
                    <Pressable onPress={handleResendPress}>
                      <Text style={[styles.InputTitle, { color: "#000" }]}>
                        Didn’t get the code? Resend it
                      </Text>
                    </Pressable>
                  ) : (
                    <Text></Text>
                  )} */}
                </View>

                <VerifyCode
                  value={verificationCode}
                  onChangeText={setVerificationCode}
                />

                {isCodeSent && (
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <Text style={styles.InputTitle}>Resend code in</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <View style={{ marginTop: -15 }}>
                        <AntDesign
                          name="clockcircleo"
                          size={20}
                          color="black"
                        />
                      </View>
                      <View>
                        {timerSeconds > 0 && (
                          <Text
                            style={[
                              styles.InputTitle,
                              {
                                color: "#E02351",
                                marginLeft: 5,
                              },
                            ]}
                          >
                            {`${timerSeconds}s`}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                )}
              </>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              mode="contained"
              onPress={handleNextPress}
            >
              <Text style={styles.buttonText}>Done</Text>
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 20,
    // justifyContent: "center",
    paddingHorizontal: "5%", 
    paddingVertical: "20%",
    // marginVertical: "10%"
    position: "relative",
  },
  InputTitle: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#000",
    paddingHorizontal: "7%",
    textTransform: "uppercase",
  },
  button: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#090A2A",
  },

  buttonText: {
    color: "#F8D10E",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
});
export default VerifyPhoneNumber;
