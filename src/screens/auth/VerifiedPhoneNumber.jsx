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

const VerifiedPhoneNumber = () => {
  const { navigate } = useNavigation();

  const colorList = [
    { offset: "0%", color: "#2b1f73", opacity: "0.8" },
    { offset: "70%", color: "#090A2A", opacity: "0.5" },
    { offset: "100%", color: "#090A2A", opacity: "1" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
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
              source={require("../../../assets/Design.png")}
              style={styles.imageBackground}
              imageStyle={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>All Done</Text>
              <Text style={styles.subtitle}>
                Your account has been created. You're now ready to explore and
                enjoy all the features and benefits we have to offer.{" "}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginHorizontal: 70,
                marginTop: 50,
              }}
            >
              <Button
                style={styles.button}
                mode="contained"
                onPress={() => navigate("Login")}
              >
                <Text style={styles.buttonText}>Finish</Text>
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
    height: "80%",
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
    width: "60%",
    gap: 10,
  },
  title: {
    fontSize: 20,
    lineHeight: 21,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 28,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    width: "60%",
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default VerifiedPhoneNumber;
