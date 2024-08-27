import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import SheetCard from "../../../components/SheetCard";
import * as Animatable from "react-native-animatable";

export default function HistoryScreen() {
  const { navigate } = useNavigation();
  const [date, setDate] = useState("");

  return (
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.history}>
          <Text style={styles.historyText}>Your Quiz History</Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder='dd/mm/yy'
              value={date}
              onChangeText={setDate}
              style={styles.searchInput}
              placeholderTextColor='#aaa'
            />
            <EvilIcons
              name='search'
              size={24}
              color='#aaa'
              style={styles.icon}
            />
          </View>
        </View>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 200 }}
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
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C092A",
    paddingHorizontal: 20,
    paddingTop: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10%",
  },
  history: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  historyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  searchContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  searchInput: {
    flex: 1,
    padding: 10,
    paddingLeft: 40,
    color: "#fff",
  },
  icon: {
    position: "absolute",
    left: 10,
  },
});
