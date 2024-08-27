import React, { useState } from "react";
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

const Questions = [
  "Exposure to allergies",
  "Inoculation",
  "Inheritance",
  "Overcoming a disease",
];
const FirstQuestion = () => {
  const { navigate } = useNavigation();
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleSelectQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.iconIndex}>
          <AntDesign name='user' size={16} color='black' />
          <Text>1</Text>
        </View>
        <View></View>
        <View style={styles.index}>
          <Text>1</Text>
        </View>
      </View>

      <View style={styles.quizDetailsContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContent}
        >
          <View style={styles.wrapper}>
            <View style={styles.IndexContainer}>
              <View style={styles.IndexNumber}>
                <Text>6</Text>
              </View>
            </View>
            <View style={styles.quizTitleContainer}>
              <Text style={styles.sportText}>Question 1 of 2</Text>
              <Text style={styles.titleText}>
                Which Satellite system provides high-resolution optical imagery
                for Earth Observation?
              </Text>
            </View>
          </View>
          <View style={{ paddingVertical: 20 }}>
            {Questions.map((question, index) => (
              <View key={index} style={{ paddingVertical: 10 }}>
                <QuestionCard
                  question={question}
                  isSelected={selectedQuestion === index}
                  onPress={() => handleSelectQuestion(index)}
                />
              </View>
            ))}
          </View>

          <View style={styles.btnCont}>
            <View style={styles.btn}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#E1DEF9" }]}
              >
                <Text style={[styles.buttonText, { color: "#000" }]}>
                  Previous
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigate("Finish")}
              >
                <Text style={styles.buttonText}>Finish</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const QuestionCard = ({ question, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={onPress}
    >
      <Text style={[styles.cardText, isSelected ? { fontWeight: "bold" } : ""]}>
        {question}
      </Text>
    </TouchableOpacity>
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
  top: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  iconIndex: {
    width: 45,
    height: 30,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#FFCE2E",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  index: {
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 20,
    backgroundColor: "#44509F",
    justifyContent: "center",
    alignItems: "center",
  },
  IndexContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  IndexNumber: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#FFCCD5",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    gap: "40%",
  },
  quizDetailsContainer: {
    position: "relative",
    width: "100%",
    height: "80%",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  scrollContent: {
    flex: 1,
    // gap: "20%",
    marginBottom: 55,
  },
  quizTitleContainer: {
    width: "100%",
    gap: "20%",
  },
  sportText: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1.12,
    color: "#858494",
    textTransform: "uppercase",
  },
  titleText: {
    fontSize: 17,
    lineHeight: 30,
    fontWeight: "500",
    color: "#0c092a",
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0c092a",
    marginLeft: 12,
  },
  btnCont: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  btn: {
    width: "50%",
  },
  button: {
    // position: "absolute",
    // bottom: 0,
    // width: "50%",
    width: 150,
    backgroundColor: "#0c092a",
    borderRadius: 50,
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
  card: {
    borderWidth: 1,
    borderColor: "#EFEEFC",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
  },
  selectedCard: {
    backgroundColor: "#EFEEFC",
  },
  cardText: {
    fontSize: 15,
  },
});

export default FirstQuestion;
