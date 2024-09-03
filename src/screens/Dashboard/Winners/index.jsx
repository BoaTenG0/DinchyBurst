import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";

import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-paper";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { TabViewLazyLoadingShowcase } from "../../../components/Tabs";
import { PointCard } from "../../../components/PointsCard";
import { AntDesign } from "@expo/vector-icons";

const { height: screenHeight } = Dimensions.get("window");

const WinnersScreen = () => {
  const { navigate } = useNavigation();

  const bottomSheetModalRef = useRef(null);

  const [snapPoint, setSnapPoint] = useState(screenHeight * 0.3);
  const translateY = useSharedValue(0);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index === -1) {
      setTimeout(() => {
        console.log("Re-opening sheet after collapse");
        bottomSheetModalRef.current?.present();
      }, 2000);
    }
  }, []);
  useEffect(() => {
    console.log("Component mounted, presenting bottom sheet");
    bottomSheetModalRef.current?.present();
  }, []);

  const handleGesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      const newSnapPoint = Math.min(
        Math.max(snapPoint + event.translationY, 0),
        screenHeight
      );
      runOnJS(setSnapPoint)(newSnapPoint);
      translateY.value = withSpring(0);
      runOnJS(updateSnapPoints)();
    },
  });

  const dynamicSnapPoints = useMemo(
    () => [snapPoint, screenHeight],
    [snapPoint]
  );

  const updateSnapPoints = () => {
    bottomSheetModalRef.current?.snapToPosition(snapPoint);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Animatable.View animation='fadeInUp' duration={1000}>
            <View style={styles.header}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#FCD310",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button onPress={() => navigate("HomeProfile")}>
                <AntDesign name="arrowleft" size={20} color="black" />
                </Button>
              </View>
              <Text style={styles.text}>Leader board</Text>
            </View>
            <View style={{ width: "100%", padding: 20 }}>
              <TabViewLazyLoadingShowcase />
            </View>
            <BottomSheetModalProvider>
              <PanGestureHandler onGestureEvent={handleGesture}>
                <Animated.View style={[styles.modalContainer, animatedStyle]}>
                  <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={dynamicSnapPoints}
                    onChange={handleSheetChanges}
                    style={styles.bottomSheet}
                  >
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      style={{ marginBottom: 90 }}
                    >
                      <BottomSheetView style={styles.contentContainer}>
                        <PointCard
                          rank='1'
                          point='3 points'
                          name='Kanaan Stark'
                          // flag={require("../../assets/cz-czech-republic.svg")}
                          avatar={require("../../../../assets/Mask.png")}
                        />
                        <PointCard
                          rank='2'
                          point='390 points'
                          name='Tayor Craig'
                          // flag={require("../../assets/cz-czech-republic.svg")}
                          avatar={require("../../../../assets/Mask.png")}
                        />
                        <PointCard
                          rank='3'
                          point='333 points'
                          name='Ian Stark'
                          // flag={require("../../assets/cz-czech-republic.svg")}
                          avatar={require("../../../../assets/Mask.png")}
                        />
                        <PointCard
                          rank='4'
                          point='22 points'
                          name='Tubers'
                          // flag={require("../../assets/cz-czech-republic.svg")}
                          avatar={require("../../../../assets/Mask.png")}
                        />
                        <PointCard
                          rank='5'
                          point='221 points'
                          name='Nick'
                          // flag={require("../../assets/cz-czech-republic.svg")}
                          avatar={require("../../../../assets/Mask.png")}
                        />
                        <PointCard
                          rank='6'
                          point='123 points'
                          name='Tayor'
                          // flag={require("../../assets/cz-czech-republic.svg")}
                          avatar={require("../../../../assets/Mask.png")}
                        />
                      </BottomSheetView>
                    </ScrollView>
                  </BottomSheetModal>
                </Animated.View>
              </PanGestureHandler>
            </BottomSheetModalProvider>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
export default WinnersScreen;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0C092A",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#0C092A",
    position: "relative",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    gap: 100,
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    position: "absolute",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  bottomSheet: {
    margin: 0,
    padding: 0,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#EFEEFC",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
