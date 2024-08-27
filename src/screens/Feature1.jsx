import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { RadialGradient } from "react-native-gradients";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Feature1 = () => {
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
        >
          <Button></Button>
        </View>
        <View
          style={{
            //   width: 100,
            height: 30,
            borderRadius: 20,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onPress={() => navigate("Feature2")}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 20,
              }}
            >
              <Text style={{ color: "#000", fontWeight: "bold" }}>Skip</Text>
            </View>
          </Button>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.stretchedRadialContainer}>
          <RadialGradient x='50%' y='50%' colorList={colorList} />
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
              source={require("../../assets/rocket.png")}
              style={styles.imageBackground}
              imageStyle={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>How to Play</Text>
              <Text style={styles.subtitle}>
                Buy tokens (GHC5), answer 1-5 questions quickly.{" "}
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
                mode='contained'
                onPress={() => navigate("Feature2")}
              >
                <Text style={styles.buttonText}>Next</Text>
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
    gap: "10%",
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
    width: "60%",
    backgroundColor: "#F8D10E",
    //   paddingVertical: 5
  },
  buttonText: {
    color: "#031EAA",
  },
});

export default Feature1;
