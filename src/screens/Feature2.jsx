import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import { RadialGradient } from "react-native-gradients";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Feature2 = () => {
  const { navigate } = useNavigation();

  const colorList = [
    { offset: "0%", color: "#2b1f73", opacity: "0.8" },
    { offset: "70%", color: "#090A2A", opacity: "0.5" },
    { offset: "100%", color: "#090A2A", opacity: "1" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.row}>
        <View
          style={
            {
              // width: 40,
              // height: 40,
              // borderRadius: 20,
              // backgroundColor: "#fff",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        ></View>
      </View>
      <View style={styles.container}>
        <View style={styles.stretchedRadialContainer}>
          {Platform.OS === "ios" && (
            <RadialGradient x="50%" y="50%" colorList={colorList} />
          )}
          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
            }}
          >
            <ImageBackground
              source={require("../../assets/chat.png")}
              style={styles.imageBackground}
              imageStyle={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Tips, Support, and Community</Text>
              <Text style={styles.subtitle}>
                Join our community, use our support, and start winning now!{" "}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginHorizontal: 70,
                marginTop: 50,
                gap: 50,
              }}
            >
              <Button
                style={styles.button1}
                mode="contained"
                onPress={() => navigate("Register")}
              >
                <Text style={styles.buttonText}>Register</Text>
              </Button>
              <Button
                style={styles.button}
                mode="contained"
                onPress={() => navigate("Login")}
              >
                <Text style={{ color: "#fff" }}>Sign In</Text>
              </Button>
            </View>
          </View>
        </View>
        {/* </Animatable.View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#090A2A",
  },
  container: {
    flex: 1,
    backgroundColor: "#090A2A",
    justifyContent: "center",
    alignItems: "center",
  },
  stretchedRadialContainer: {
    position: "relative",
    width: "150%",
    height: "70%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
    paddingHorizontal: "20%",
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 28,
    color: "#fff",
    textAlign: "center",
    // width:
  },
  button: {
    width: "25%",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
  },
  button1: {
    width: "25%",
    backgroundColor: "#F8D10E",
  },
  buttonText: {
    color: "#031EAA",
    fontWeight: "bold",
  },
});

export default Feature2;
