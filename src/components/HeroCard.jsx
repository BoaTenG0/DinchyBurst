import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import SvgComponent from "./Svg";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
const HeroCard = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.svgContainer}>
      <SvgComponent />
      <View style={styles.contentOnSvg}>
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
      </View>
      <View style={styles.playButtonContainer}>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => navigate("BasicTriviaQuiz")}
        >
          <Text style={styles.playButtonText}>Play</Text>
          <MaterialCommunityIcons
            name='arrow-top-right'
            size={16}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HeroCard;
const styles = StyleSheet.create({
  svgContainer: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    position: "relative",
  },
  contentOnSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  sub: {
    padding: 20,
    marginBottom: 30,
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: "10%",
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
    // marginLeft: 50,
  },
  tagText: {
    marginLeft: 4,
    fontSize: 10,
    color: "#000000",
  },
  reminderText: {
    fontSize: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 15,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  playButtonContainer: {
    position: "absolute",
    top: "25%",
    right: 10,
    transform: [{ translateY: -25 }],
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffce2eff",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  playButtonText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#000000",
  },
});
