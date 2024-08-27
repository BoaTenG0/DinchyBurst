import { ScrollView, StyleSheet, Text, View } from "react-native";
import SheetCard from "./SheetCard";
const SheetContents = () => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>Today's Game</Text>
        <View style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>All Quizzes Played</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{ marginBottom: 80 }}
      >
        <SheetCard
          date='08.15.2024'
          hoursSpent='3'
          earnings='GHS 500.00'
          attemptedQuestions='5/5'
        />
        <SheetCard
          date='12.05.2023'
          hoursSpent='3'
          earnings='GHS 400.00'
          attemptedQuestions='4/5'
        />
        <SheetCard
          date='12.05.2023'
          hoursSpent='3'
          earnings='GHS 400.00'
          attemptedQuestions='4/5'
        />
        <SheetCard
          date='10.05.2023'
          hoursSpent='3'
          earnings='GHS 100.00'
          attemptedQuestions='1/5'
        />
      </ScrollView>
    </View>
  );
};
export default SheetContents;
const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
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
});
