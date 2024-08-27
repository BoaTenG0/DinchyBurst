import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { Avatar, Icon, Button } from "@ui-kitten/components";

const Podium = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <View style={{ position: "relative" }}>
      {/* <Podium /> */}
      {loading && (
        <ActivityIndicator
          size='large'
          color='#0000ff'
          style={styles.loadingIndicator}
        />
      )}
      <View style={styles.first}>
        <View style={styles.medalContainer}>
          <Image
            source={require("../../assets/Medal.png")}
            style={styles.medal}
            onLoad={handleImageLoad}
          />
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/ghana.png")}
            style={styles.flag}
            onLoad={handleImageLoad}
          />
          <Avatar
            source={require("../../assets/maam.png")}
            style={styles.avatar}
            onLoad={handleImageLoad}
          />
        </View>
        <Text style={styles.rankName}>Kester Gyan</Text>
        <View style={styles.scoreTag}>
          <Text style={styles.scoreText}>2,569</Text>
        </View>
      </View>
      <View style={styles.second}>
        {/* <View style={styles.medalContainer}>
                      <Image source={require('./assets/star.svg')} style={styles.medal} />
                    </View> */}
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/ghana.png")}
            style={styles.flag}
            onLoad={handleImageLoad}
          />
          <Avatar
            source={require("../../assets/Mask.png")}
            style={styles.avatar}
            onLoad={handleImageLoad}
          />
        </View>
        <Text style={styles.rankName}>Yaa Baby</Text>
        <View style={styles.scoreTag}>
          <Text style={styles.scoreText}>2,569</Text>
        </View>
      </View>
      <View style={styles.third}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/ghana.png")}
            style={styles.flag}
            onLoad={handleImageLoad}
          />
          <Avatar
            source={require("../../assets/avatar3.png")}
            style={styles.avatar}
            onLoad={handleImageLoad}
          />
        </View>
        <Text style={styles.rankName}>Ohene Gyan</Text>
        <View style={styles.scoreTag}>
          <Text style={styles.scoreText}>1,053</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: "50%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/second.png")}
          style={styles.podium2}
          onLoad={handleImageLoad}
        />
        <Image
          source={require("../../assets/first.png")}
          style={styles.podium1}
          onLoad={handleImageLoad}
        />
        <Image
          source={require("../../assets/third.png")}
          style={styles.podium3}
          onLoad={handleImageLoad}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  podium1: {
    marginTop: 20,
    width: 104,
    height: 300,
  },
  medalContainer: {
    position: "absolute",
    top: -10,
    zIndex: 1,
  },
  medal: {
    width: 30,
    height: 30,
  },
  podium2: {
    marginTop: 50,
    width: 104,
    height: 250,
  },
  podium3: {
    marginTop: 80,
    width: 104,
    height: 250,
  },
  first: {
    position: "absolute",
    // left: 0,
    right: "33%",
    top: "7%",
    width: 110,
    // height: 432,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginHorizontal: 5,
    paddingVertical: 10,
  },
  second: {
    position: "absolute",
    left: 10,
    // right: "33%",
    top: "13%",
    width: 110,
    // height: 432,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginHorizontal: 5,
    paddingVertical: 10,
  },
  third: {
    position: "absolute",
    // left: 0,
    right: "1.5%",
    top: "20%",
    width: 110,
    // height: 432,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginHorizontal: 5,
    paddingVertical: 10,
  },
  avatarContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 56,
    height: 56,
  },
  flag: {
    width: 20,
    height: 20,
    position: "absolute",
    bottom: -10,
    right: 5,
    zIndex: 100,
  },
  rankContainer: {
    alignItems: "center",
    marginTop: 5,
  },
  rankText: {
    fontSize: 40,
    color: "#ffffff",
  },
  rankName: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  },
  scoreTag: {
    backgroundColor: "#9087e5",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  scoreText: {
    fontSize: 12,
    color: "#ffffff",
  },
  loadingIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 1000,
  },
});

export default Podium;
