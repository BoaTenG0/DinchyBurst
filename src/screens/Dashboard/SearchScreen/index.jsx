import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import Rank from "../../../components/RankCard";
import QuizCard from "../../../components/QuizCard";
import { EvilIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import HeroCard from "../../../components/HeroCard";

export default function SearchScreen() {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");

  return (
    // <SafeAreaView>
    // <GestureHandlerRootView>
    // <BottomSheetModalProvider>
    <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.discover}>
          <Text style={styles.discoverText}>Discover</Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder='Quizzes'
              value={search}
              onChangeText={setSearch}
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
          {/* <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 390 }}
          contentContainerStyle={{ flexGrow: 1 }}
        > */}
          <HeroCard />
          <Rank />
          {/* </ScrollView> */}
        </View>
      </View>
    </Animatable.View>
    // {/* </BottomSheetModalProvider> */}

    // </GestureHandlerRootView>
    // <View style={styles.container}>
    //   <Text>index</Text>
    // </View>
    // </SafeAreaView>
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
  discover: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  discoverText: {
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
