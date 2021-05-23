import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Text
          style={{ color: "white", fontFamily: "circular-bold", fontSize: 24 }}
        >
          Good afternoon
        </Text>
        <View style={styles.headerBtnsContainer}>
          <TouchableOpacity>
            <MaterialIcons name="history" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{ marginLeft: 20 }}
              name="settings-outline"
              color="white"
              size={27}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    height: 50,
    maxWidth: "100%",
    marginTop: 80,
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
  },
  headerBtnsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
