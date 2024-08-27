import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";

const Finish = () => {
  const { navigate } = useNavigation();
  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.index}>
            <Text style={styles.text}>Good Job!</Text>
          </View>
          <View style={styles.iconIndex}>
            <Entypo
              name='cross'
              size={30}
              color='white'
              onPress={() => navigate("BasicTriviaQuiz")}
            />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.wrapper}>
            <Image
              source={require("../../../../assets/finish.png")}
              style={styles.image}
            />
            <Text style={styles.scoreText}>Your score is 89</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <Text style={styles.title}>completion</Text>
              <Text style={styles.subtitle}>100%</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>answered</Text>
              <Text style={styles.subtitle}>2 Questions</Text>
            </View>
          </View>
          <View style={[styles.row, { position: "absolute", bottom: 0 }]}>
            <Button style={styles.button}>
              <Text>Done</Text>
            </Button>
            <View style={styles.circle}>
              <AntDesign name='sharealt' size={20} color='#FFCE2E' />
            </View>
          </View>
        </ScrollView>
        <LottieView
          source={require("../../../../assets/confetti.json")}
          // ref={confettiRef}
          // loop={false}
          style={styles.lottie}
          autoPlay
          // resizeMode='cover'
        />
      </View>
    </Animatable.View>
  );
};

export default Finish;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0c092a",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 25,
    position: "relative",
  },
  top: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "50%",
    // paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  wrapper: {
    width: "100%",
    height: "38%",
    backgroundColor: "#FFCE2E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    gap: "20%",
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  scoreText: {
    color: "#0c092a",
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  item: {
    gap: "10%",
  },
  title: {
    color: "#858494",
    textTransform: "uppercase",
  },
  subtitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    width: "80%",
    backgroundColor: "#FFCE2E",
    paddingVertical: 5,
  },
  circle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#FFCE2E",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: "none",
  },
});
