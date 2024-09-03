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
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

export const RankCard = ({
  rank,
  plays,
  name,
  flag,
  avatar,
  medalIcon,
  medalStar,
  containerStyle,
  backgroundImage,
}) => (
  <ImageBackground
    source={backgroundImage}
    style={[styles.rankCard, containerStyle]}
    imageStyle={styles.backgroundImage}
  >
    <Image source={medalStar} style={styles.rankBadgeIcon} />
    <View style={styles.rankBadgeContainer}>
      <Text style={styles.rankNumber}>{rank}</Text>
    </View>
    <View style={styles.detailsContainer}>
      <View style={styles.detailsRow}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.detailsTextContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.playsText}>{plays}</Text>
        </View>
      </View>
      <Image source={flag} style={styles.flag} />
    </View>
  </ImageBackground>
);

const Rank = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 500 }}
      contentContainerStyle={styles.container}
    >
      {/* <> */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 40,
        }}
      >
        <View>
          <Text style={styles.title}>Top rank of the week</Text>
        </View>
        <View style={styles.viewAllContainer}>
          <View style={styles.viewAllButton}>
            <Button mode="text" onPress={() => navigate("WinnersScreen")}>
              <Text style={styles.viewAllText}>View All Winners</Text>
            </Button>
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={16}
              color="black"
            />
          </View>
        </View>
      </View>
      <RankCard
        rank="1"
        plays="3 Plays"
        name="Kanaan Stark"
        // flag={require("../../assets/cz-czech-republic.svg")}
        avatar={require("../../assets/Mask.png")}
        // medalIcon={require("../../assets/icon.svg")}
        medalStar={require("../../assets/Medal.png")}
        // containerStyle={{ backgroundColor: "#a685ff" }}
        backgroundImage={require("../../assets/Base.png")}
      />
      <RankCard
        rank="2"
        plays="2 Plays"
        name="Ian Tubers"
        // flag={require("../../assets/cz-czech-republic.svg")}
        avatar={require("../../assets/Mask.png")}
        medalStar={require("../../assets/Medal1.png")}
        // containerStyle={{ backgroundColor: "#4d4d8d" }}
        backgroundImage={require("../../assets/Base1.png")}
      />
      <RankCard
        rank="3"
        plays="1 Plays"
        name="Craig Tayor"
        // flag={require("../../assets/cz-czech-republic.svg")}
        avatar={require("../../assets/Mask.png")}
        medalStar={require("../../assets/Medal2.png")}
        // containerStyle={{ backgroundColor: "#2f2e41" }}
        backgroundImage={require("../../assets/Base2.png")}
      />
      {/* </> */}
    </ScrollView>
  );
};

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
    // paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#ffce2e",
    borderRadius: 40,
  },
  viewAllText: {
    fontSize: 9,
    color: "#0c092a",
    fontWeight: "500",
    // marginRight: 4,
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
    borderColor: "#fff",
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
    color: "#ffffff",
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
    color: "#ffffff",
    fontWeight: "500",
  },
  playsText: {
    fontSize: 14,
    color: "#ffffff",
  },
  flag: {
    width: 30,
    height: 20,
  },
});

export default Rank;
