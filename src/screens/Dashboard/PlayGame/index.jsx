import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar, Icon } from "@ui-kitten/components";
import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BasicTriviaQuiz = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "40%",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "red",
        }}
      >
        <Image
          source={require("../../../../assets/yellow.png")}
          style={styles.circleImage}
        />
      </View>

      <View style={styles.quizDetailsContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.quizTitleContainer}>
            <Text style={styles.sportText}>SPORTS</Text>
            <Text style={styles.titleText}>Basic Trivia Quiz</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.questionsContainer}>
              <View style={styles.circle}>
                <AntDesign name='question' size={16} color='white' />
              </View>
              <Text style={styles.infoText}>2 Questions</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.questionsContainer}>
              <View style={[styles.circle, { backgroundColor: "#FFCE2E" }]}>
                <FontAwesome6 name='gamepad' size={16} color='black' />
              </View>
              <Text style={styles.infoText}>32k plays</Text>
            </View>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.descTitle}>DESCRIPTION</Text>
            <Text style={styles.descText}>
              Any time is a good time for a quiz and even better if that happens
              to be a football themed quiz!
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("FirstQuestion")}
          >
            <Text style={styles.buttonText}>Play Game</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0c092a",
    alignItems: "center",
    paddingTop: 40,
  },
  circleImage: {
    width: 200,
    height: 200,
  },
  quizDetailsContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  scrollContent: {
    // flex: 1,
    gap: 20,
    paddingBottom: 70,
  },
  quizTitleContainer: {
    gap: 10,
  },
  sportText: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1.12,
    color: "#858494",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#0c092a",
  },
  infoContainer: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#EFEEFC",
    paddingHorizontal: 20,
  },
  questionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0c092a",
    marginLeft: 12,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: "#aaa",
  },
  descContainer: {
    gap: 10,
  },
  descTitle: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1.12,
    color: "#858494",
  },
  descText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#0c092a",
  },
  button: {
    width: "90%",
    backgroundColor: "#0c092a",
    borderRadius: 57,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
  },
  baseImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1,
  },
});

export default BasicTriviaQuiz;
