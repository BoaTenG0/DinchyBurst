import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import plus from "../assets/plus.png";
import HomeScreen from "../src/screens/Dashboard/HomeScreen";
import BottomSheet from "../src/components/BottomSheet";
import SearchScreen from "../src/screens/Dashboard/SearchScreen";
import { Clock, Setting2 } from "iconsax-react-native";
import HistoryScreen from "../src/screens/Dashboard/HistoryScreen";
import ProfileScreen from "../src/screens/Dashboard/ProfileScreen";
import UpdateProfile from "../src/screens/auth/UpdateProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdateEmail from "../src/screens/auth/UpdateEmail";
import UpdatePassword from "../src/screens/auth/UpdatePassword";
import WinnersScreen from "../src/screens/Dashboard/Winners";
import BasicTriviaQuiz from "../src/screens/Dashboard/PlayGame";
import FirstQuestion from "../src/screens/Dashboard/PlayGame/FirstQuestion";
import Finish from "../src/screens/Dashboard/Finish";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function BottomNavigation() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const bottomSheetRef = useRef(null);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = useCallback(() => {
    if (isBottomSheetVisible) {
      bottomSheetRef.current?.dismiss();
    } else {
      bottomSheetRef.current?.present();
    }
    setBottomSheetVisible((prev) => !prev);
  }, [isBottomSheetVisible]);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index === -1) {
      setBottomSheetVisible(false);
    }
  }, []);

  const DummyComponent = () => {
    return null;
  };

  const ProfileStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='UpdateProfile' component={UpdateProfile} />
        <Stack.Screen name='UpdateEmail' component={UpdateEmail} />
        <Stack.Screen name='UpdatePassword' component={UpdatePassword} />
      </Stack.Navigator>
    );
  };
  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomeProfile' component={HomeScreen} />
        <Stack.Screen name='WinnersScreen' component={WinnersScreen} />
        <Stack.Screen name='BasicTriviaQuiz' component={BasicTriviaQuiz} />
        <Stack.Screen name='FirstQuestion' component={FirstQuestion} />
        <Stack.Screen name='Finish' component={Finish} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer independent>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
          }}
        >
          <Tab.Screen
            name={"Home"}
            component={HomeStack}
            options={{
              title: "HomeProfile",
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <FontAwesome5
                    name='home'
                    size={20}
                    color={focused ? "red" : "gray"}
                  />
                </View>
              ),
              headerShown: false,
            }}
            listeners={{
              tabPress: () => {
                Animated.spring(tabOffsetValue, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start();
              },
            }}
          />

          <Tab.Screen
            name={"Search"}
            component={SearchScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <FontAwesome5
                    name='search'
                    size={20}
                    color={focused ? "red" : "gray"}
                  />
                </View>
              ),
              headerShown: false,
            }}
            listeners={{
              tabPress: () => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth(),
                  useNativeDriver: true,
                }).start();
              },
            }}
          />

          <Tab.Screen
            name={"ActionButton"}
            component={DummyComponent} // Using the dummy component
            options={{
              tabBarIcon: () => (
                <TouchableOpacity onPress={toggleBottomSheet}>
                  <View style={styles.actionButton}>
                    {isBottomSheetVisible ? (
                      <Ionicons name='close' size={24} color='white' />
                    ) : (
                      <Image source={plus} style={styles.plusIcon} />
                    )}
                  </View>
                </TouchableOpacity>
              ),
              headerShown: false,
            }}
          ></Tab.Screen>

          <Tab.Screen
            name={"History"}
            component={HistoryScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Clock size={20} color={focused ? "red" : "gray"} />
                </View>
              ),
              headerShown: false,
            }}
            listeners={{
              tabPress: () => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 3,
                  useNativeDriver: true,
                }).start();
              },
            }}
          />

          <Tab.Screen
            name={"Settings"}
            component={ProfileStack}
            options={{
              title: "Profile",
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Setting2 size={20} color={focused ? "red" : "gray"} />
                </View>
              ),
              headerShown: false,
            }}
            listeners={{
              tabPress: () => {
                Animated.spring(tabOffsetValue, {
                  toValue: getWidth() * 4,
                  useNativeDriver: true,
                }).start();
              },
            }}
          />
        </Tab.Navigator>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        onDismiss={() => setBottomSheetVisible(false)}
      />
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 80;
  return width / 5;
}

function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Settings!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Notifications!</Text>
    </View>
  );
}

// function SearchScreen() {
//   return (
//     <View style={styles.screenContainer}>
//       <Text>Search!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    height: 60,
    borderTopLeftRadius: 10,
    // paddingBottom: 40,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    paddingHorizontal: 20,
    zIndex: 1, // Ensures the bottom navigation stays on top
  },
  iconContainer: {
    position: "absolute",
    top: 20,
  },
  actionButton: {
    width: 55,
    height: 55,
    backgroundColor: "red",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Platform.OS === "android" ? 50 : 30,
    zIndex: 1, // Ensures the action button stays on top
  },
  plusIcon: {
    width: 22,
    height: 22,
    tintColor: "white",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
