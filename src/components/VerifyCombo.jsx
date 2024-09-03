import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
const VerifyCompo = ({ header, content, wrong, phone }) => {
  const { navigate } = useNavigation();
  const phoneNumber = useSelector((state) => state.phonenumber.phoneNumber);
  return (
    <View style={[styles.title, styles.titleFlexBox]}>
      <Text style={styles.phoneNumber}>{header}</Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            width: "80%",
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "bold",
          }}
        >
          {content} {phone && phoneNumber}
        </Text>
        <Text>
          {wrong && (
            <Pressable onPress={() => navigate("PhoneNumber")}>
              {/* <Text
                style={{
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Edit
              </Text> */}
              <MaterialIcons name="edit" size={20} color="black" />
            </Pressable>
          )}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  phoneNumber: {
    fontSize: 30,
    // lineHeight: 45,
    fontWeight: "700",
    // fontFamily: FontFamily.textMediumSemiBold,
    width: "100%",
    color: "#000",
  },
});
export default VerifyCompo;
