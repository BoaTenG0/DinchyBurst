import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import { Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Avatar, Layout, Tab, TabView, Text } from "@ui-kitten/components";
import { View } from "react-native-animatable";
import Podium from "./Podium";

import { RankCard } from "./RankCard";
import { PointCard } from "./PointsCard";

export const TabViewLazyLoadingShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const shouldLoadComponent = (index) => index === selectedIndex;

  const tabs = ["Weekly", "All Time"];

  return (
    <TabView
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={(index) => setSelectedIndex(index)}
      tabBarStyle={styles.tabBar}
      indicatorStyle={{ height: 0 }}
    >
      {tabs.map((tab, index) => (
        <Tab key={index} title={tab} titleStyle={styles.tabTitle}>
          <Layout style={styles.tabContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {tab === "Weekly" ? (
                <>
                  <Podium />
                </>
              ) : (
                <View
                  style={{
                    backgroundColor: "#EFEEFC",
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <PointCard
                    rank='1'
                    point='3 points'
                    name='Kanaan Stark'
                    // flag={require("../../assets/cz-czech-republic.svg")}
                    avatar={require("../../assets/Mask.png")}
                  />
                  <PointCard
                    rank='2'
                    point='390 points'
                    name='Tayor Craig'
                    // flag={require("../../assets/cz-czech-republic.svg")}
                    avatar={require("../../assets/Mask.png")}
                  />
                  <PointCard
                    rank='3'
                    point='333 points'
                    name='Ian Stark'
                    // flag={require("../../assets/cz-czech-republic.svg")}
                    avatar={require("../../assets/Mask.png")}
                  />
                  <PointCard
                    rank='4'
                    point='22 points'
                    name='Tubers'
                    // flag={require("../../assets/cz-czech-republic.svg")}
                    avatar={require("../../assets/Mask.png")}
                  />
                  <PointCard
                    rank='5'
                    point='221 points'
                    name='Nick'
                    // flag={require("../../assets/cz-czech-republic.svg")}
                    avatar={require("../../assets/Mask.png")}
                  />
                  <PointCard
                    rank='6'
                    point='123 points'
                    name='Tayor'
                    // flag={require("../../assets/cz-czech-republic.svg")}
                    avatar={require("../../assets/Mask.png")}
                  />
                </View>
              )}
            </ScrollView>
          </Layout>
        </Tab>
      ))}
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  tabBar: {
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
    paddingVertical: 15,
  },
  tabTitle: {
    padding: 5,
  },
});
