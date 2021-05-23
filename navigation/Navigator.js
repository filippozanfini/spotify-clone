import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/HomeScreen";
import MyListScreen from "../screens/HomeScreen";

import { Foundation, Feather, Ionicons } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => {
          return <Foundation name="home" color={tabInfo.tintColor} size="26" />;
        },
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: (tabInfo) => {
          return <Feather name="search" color={tabInfo.tintColor} size="26" />;
        },
      },
    },
    YourLibrary: {
      screen: MyListScreen,
      navigationOptions: {
        tabBarLabel: "YourLibrary",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="library" color={tabInfo.tintColor} size="26" />
          );
        },
      },
    },
  },

  {
    tabBarOptions: {
      activeTintColor: "white",
      style: {
        backgroundColor: "black",
        height: 55,
      },
    },
  }
);

export default createAppContainer(TabNavigator);
