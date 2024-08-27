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
    <LinearGradient colors={["#a685ff", "#8669C0"]} style={styles.container}>
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
            <Text style={styles.subTitle}>5 Questions</Text>
          </View>
        </View>

        <View style={styles.central}>
          <View style={styles.tag}>
            <MaterialIcons name='stars' size={12} color='black' />
            <Text style={styles.tagText}>72 Ratings (4.3)</Text>
          </View>
          <View style={styles.tag}>
            <FontAwesome5 name='gamepad' size={12} color='black' />
            <Text style={styles.tagText}>34.8k plays</Text>
          </View>
          <View style={styles.tag}>
            <MaterialIcons name='lock' size={12} color='black' />
            <Text style={styles.tagText}>Locked</Text>
          </View>
        </View>

        <Text style={styles.reminderText}>
          Remember fastest time to answer correctly takes the prize
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <MaterialIcons name='history' size={16} color='black' />
          <Text style={styles.footerLeftText}>Posted 1 hour ago</Text>
        </View>
        <Text style={styles.footerRightText}>100 Playing Now</Text>
      </View>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    margin: 10,
    width: width - 20,
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
    paddingHorizontal: 24,
  },
  playButtonText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#000000",
  },
  playButtonContainer: {
    position: "absolute",
    top: -15,
    right: 0,
    width: 93.95,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 15,
    borderRadius: 50,
    transform: "",
    // borderBottomRightRadius: 0,
    // borderColor: "",
  },
});

export default QuizCard;
