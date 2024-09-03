// Rank.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const PointCard = ({
  rank,
  point,
  name,
  flag,
  avatar,
  medalIcon,
  medalStar,
  containerStyle,
  backgroundImage,
}) => (
  <View style={[styles.rankCard, { backgroundColor: "#fff" }]}>
    <View style={styles.rankBadgeContainer}>
      <Text style={styles.rankNumber}>{rank}</Text>
    </View>
    <View style={styles.detailsContainer}>
      <View style={styles.detailsRow}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.detailsTextContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.playsText}>{point}</Text>
        </View>
      </View>
      <Image source={flag} style={styles.flag} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // marginBottom: 80,
    // paddingTop: 20,
    // padding: 16,
    // backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "500",
  },
  //   viewAllContainer: {
  //     alignItems: "flex-end",
  //     marginBottom: 16,
  //   },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#ffce2e",
    borderRadius: 40,
  },
  viewAllText: {
    fontSize: 9,
    color: "#0c092a",
    fontWeight: "500",
    marginRight: 4,
  },
  rankCard: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
    alignItems: "center",
    gap: 15,
  },
  rankBadgeContainer: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    // marginRight: 16,
  },
  rankBadgeBackground: {
    width: 42.65,
    height: 40,
  },
  rankBadgeIcon: {
    position: "absolute",
    top: -20,
    left: 280,
    width: 42.65,
    height: 40,
    // width: 21.33,
    // height: 20,
  },
  rankNumber: {
    fontSize: 12,
    fontWeight: "500",
    // color: "#ffffff",
    textAlign: "center",
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  detailsTextContainer: {
    justifyContent: "center",
  },
  nameText: {
    fontSize: 16,
    // color: "#ffffff",
    fontWeight: "500",
  },
  playsText: {
    fontSize: 14,
    // color: "#ffffff",
  },
  flag: {
    width: 30,
    height: 20,
  },
});
