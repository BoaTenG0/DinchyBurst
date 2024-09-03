import { AntDesign, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Drawer, IconButton } from "react-native-paper";
import * as Animatable from "react-native-animatable";

const ProfileScreen = () => {
  const { navigate } = useNavigation();
  return (
    <Animatable.View animation="fadeInUp" duration={1000} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Profile Settings</Text>
          <View style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Logout</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ position: "relative", justifyContent: "center", alignItems: "center" }}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../../../assets/Mask.png")}
                style={styles.userPhoto}
              />
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.profileText}>Ohene Gyan</Text>
              <View style={styles.menu}>
                <View style={styles.menuItem}>
                  <AntDesign name="star" size={20} color="#fff" />
                  <Text style={styles.menuItemText}>Score</Text>
                  <Text style={styles.menuItemValue}>590</Text>
                </View>
                <View style={styles.menuItem}>
                  <FontAwesome6 name="crown" size={20} color="#fff" />
                  <Text style={styles.menuItemText}>Total quizzes</Text>
                  <Text style={styles.menuItemValue}>590</Text>
                </View>
                <View style={styles.menuItem}>
                  <FontAwesome6 name="sack-dollar" size={20} color="#fff" />
                  <Text style={styles.menuItemText}>total earnings</Text>
                  <Text style={styles.menuItemValue}>GHS 590</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ gap: 10, paddingVertical: 20 }}>
            <Text
              style={{
                marginLeft: 15,
                lineHeight: 40,
                fontSize: 15,
                fontWeight: "bold",
                letterSpacing: 3,
                color: "#aaa",
              }}
            >
              Account
            </Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: 290 }}
            >
              <View style={{ paddingHorizontal: 20, gap: 10 }}>
                <TouchableOpacity
                  style={[
                    styles.row,
                    { backgroundColor: "#EFEEFC", borderRadius: 30 },
                  ]}
                  onPress={() => navigate("UpdateProfile")}
                >
                  <View style={styles.rowSub}>
                    <View style={styles.circle}>
                      <AntDesign name="user" size={20} color="black" />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text style={styles.title}>Update Profile</Text>
                      <Text style={styles.subTitle}>
                        Update username, phone number
                      </Text>
                    </View>
                  </View>
                  <IconButton icon="chevron-right" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.row,
                    { backgroundColor: "#EFEEFC", borderRadius: 30 },
                  ]}
                  onPress={() => navigate("UpdateEmail")}
                >
                  <View style={styles.rowSub}>
                    <View style={styles.circle}>
                      <MaterialIcons name="email" size={20} color="#000" />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text style={styles.title}>Change Email Address</Text>
                      <Text style={styles.subTitle}>
                        iantubers957@gmail.com
                      </Text>
                    </View>
                  </View>
                  <IconButton icon="chevron-right" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.row,
                    { backgroundColor: "#EFEEFC", borderRadius: 30 },
                  ]}
                  onPress={() => navigate("UpdatePassword")}
                >
                  <View style={styles.rowSub}>
                    <View style={styles.circle}>
                      <MaterialIcons name="lock" size={20} color="#000" />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text style={styles.title}>Change Password</Text>
                      <Text style={styles.subTitle}>
                        Last change 1 year ago
                      </Text>
                    </View>
                  </View>
                  <IconButton icon="chevron-right" />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};


export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#0C092A",
    paddingTop: 50,
    position: "relative",
    // alignItems: "center",
    // justifyContent: "center",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "red",
    borderRadius: 40,
  },
  viewAllText: {
    fontSize: 9,
    color: "#fff",
    fontWeight: "500",
    marginRight: 4,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
  },
  imageContainer: {
    position: "absolute",
    // left:Platform.OS == "ios" ? 150 : 170,
    top: -25,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileText: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    gap: 20,
    paddingHorizontal: 20,
  },
  menu: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 5,
  },
  menuItemText: {
    color: "#aaa",
    textTransform: "uppercase",
    fontSize: 10,
  },
  menuItemValue: {
    color: "#fff",
    fontWeight: "bold",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  rowSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 11,
  },
});
