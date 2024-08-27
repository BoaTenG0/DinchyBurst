import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const { width } = Dimensions.get("window");

const SheetCard = ({
  attemptedQuestions,
  earnings,
  hoursSpent,
  score,
  date,
}) => {
  return (
    // <LinearGradient colors={["#FCC636 ", "#FFCE2E"]} style={styles.container}>
    <LinearGradient colors={["#FFCE2E", "#FCC636"]} style={styles.container}>
      <View style={styles.sub}>
        <View style={styles.header}>
          <View style={styles.Img}>
            <Image
              source={require("../../assets/circle.png")}
              style={styles.profilePic}
            />
          </View>
          <View style={styles.quizInfo}>
            <Text style={styles.quizTitle}>Quiz Title</Text>
            <Text
              style={styles.subTitle}
            >{`Total Attempted Questions: ${attemptedQuestions}`}</Text>
          </View>
        </View>

        <View style={styles.central}>
          <View style={styles.tag}>
            <MaterialCommunityIcons
              name='calendar-today'
              size={12}
              color='black'
            />
            <Text style={styles.tagText}>{date}</Text>
          </View>
          <View style={styles.tag}>
            <FontAwesome6 name='clock-rotate-left' size={12} color='black' />
            <Text style={styles.tagText}>{`${hoursSpent} hours spent`}</Text>
          </View>
          <View style={styles.tag}>
            <FontAwesome name='trophy' size={12} color='black' />
            <Text style={styles.tagText}>{score}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Text style={styles.footerLeftText}>Your Earnings</Text>
        </View>
        <Text style={styles.footerRightText}>{earnings}</Text>
      </View>
    </LinearGradient>
  );
};
export default SheetCard;
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    margin: 10,
    width: width - 50,
    alignSelf: "center",
    position: "relative",
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
    color: "#000",
  },
  subTitle: {
    fontSize: 10,
    color: "#000",
  },
  central: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 40,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffce2eff",
    borderRadius: 24,
    padding: 6,
    borderWidth: 1,
    borderColor: "#000",
  },
  tagText: {
    marginLeft: 4,
    fontSize: 10,
    color: "#000000",
    // fontWeight: "bold",
  },
  reminderText: {
    fontSize: 10,
    color: "#000",
    // fontWeight: "bold",
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
    backgroundColor: "#9087E5",
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
    paddingHorizontal: 24,
  },
  playButtonText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#000000",
  },
  playButtonContainer: {
    position: "absolute",
    top: 15,
    right: 22,
    width: 93.95,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
  },
});
