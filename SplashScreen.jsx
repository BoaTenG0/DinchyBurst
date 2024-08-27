import React, { useEffect, useRef } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { RadialGradient } from "react-native-gradients";
import * as Animatable from "react-native-animatable";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const CustomSplashScreen = ({ onLoad }) => {
  const confettiRef = useRef(null);
  const triggerConfetti = () => {
    if (confettiRef.current) {
      confettiRef.current.play(0);
    }
  };
  useEffect(() => {
    const confettiTimeout = setTimeout(() => {
      triggerConfetti();
    }, 1000);

    const onLoadTimeout = setTimeout(() => {
      onLoad();
    }, 3000);

    return () => {
      clearTimeout(confettiTimeout);
      clearTimeout(onLoadTimeout);
    };
  }, [onLoad]);

  const colorList = [
    { offset: "0%", color: "#2b1f73", opacity: "0.8" },
    { offset: "70%", color: "#090A2A", opacity: "0.5" },
    { offset: "100%", color: "#090A2A", opacity: "1" },
  ];

  const sv = useSharedValue(0);

  useEffect(() => {
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <View style={styles.container}>
      {/* <Animatable.View animation='fadeInUp' duration={1000} style={{ flex: 1 }}> */}
      <View style={styles.stretchedRadialContainer}>
        <RadialGradient x='50%' y='50%' colorList={colorList} />
        <Animated.View style={[styles.box, animatedStyle]}>
          <ImageBackground
            source={require("./assets/svgg.png")}
            style={styles.imageBackground}
            imageStyle={styles.image}
          />
        </Animated.View>
        <LottieView
          source={require("./assets/Animation.json")}
          ref={confettiRef}
          loop={false}
          style={styles.lottie}
          resizeMode='cover'
        />
      </View>
      {/* </Animatable.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090A2A",
    justifyContent: "center",
    alignItems: "center",
  },
  stretchedRadialContainer: {
    position: "relative",
    width: "150%",
    height: "70%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  // image: {
  //   position: "absolute",
  //   width: "30%",
  //   height: "30%",
  //   resizeMode: "contain",
  // },
  imageBackground: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
  box: {
    position: "absolute",
    height: 120,
    width: 150,
    // borderRadius: 20,
    overflow: "hidden",
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

export default CustomSplashScreen;
