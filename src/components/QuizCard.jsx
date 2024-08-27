// App.js
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
const { width } = Dimensions.get("window");
const QuizCard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "70%",
          borderTopRightRadius: 35,
          backgroundColor: "#fff",
          // position: "absolute",
          // top: 15,
        }}
      ></View>
      <View
        style={{
          width: "30%",
          justifyContent: "flex-end",
          // height: "70%",
          // backgroundColor: "#fff",
          // borderBottomLeftRadius: 50,
          // borderWidth: 15,
          // border
        }}
      >
        <View
          style={{
            height: "32%",
            backgroundColor: "black",
            paddingBottom: 40,
            zIndex: 100,
            position: "absolute",
            right: 5,
            top: 20,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 35,
            // borderWidth: 15,
            // border
          }}
        >
          <View style={styles.playButtonContainer}>
            <View style={styles.playButton}>
              <Text style={styles.playButtonText}>Play</Text>
              <MaterialCommunityIcons
                name='arrow-top-right'
                size={16}
                color='black'
              />
            </View>
          </View>
        </View>
        <View
          style={{
            height: "70%",
            backgroundColor: "#fff",
            borderTopRightRadius: 50,
            // borderTopLeftRadius: 1.6,
            // borderTopWidth: 5,
            // borderWidth: 15,
            // border
          }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    margin: 10,
    width: "100%",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    position: "relative",
    // backgroundColor: "#fff",
  },
  sub: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  Img: {
    width: 50,
    height: 50,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#000",
  },
  profilePic: {
    width: 30,
    height: 30,
    // borderRadius: 24,
  },
  quizInfo: {
    marginLeft: 12,
  },
  quizTitle: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  subTitle: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  central: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffce2eff",
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ffffff66",
  },
  tagText: {
    marginLeft: 4,
    fontSize: 10,
    color: "#000000",
    fontWeight: "bold",
  },
  reminderText: {
    fontSize: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 50,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  footerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerLeftText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#000000",
  },
  footerRightText: {
    fontSize: 15,
    color: "#000000",
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffce2eff",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  playButtonText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#000000",
  },
  playButtonContainer: {
    // position: "absolute",
    // top: -5,
    // right: 0,
    width: 101,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 8,
    backgroundColor: "transparent",
    zIndex: -10,
    padding: 5,
    // bordeTopLeftRadius: 0,
    // borderBottomLeftRadius: 60,

    // borderRadius: 24,
  },
});

export default QuizCard;
