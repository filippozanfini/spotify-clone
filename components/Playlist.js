import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const Playlist = (props) => {
  return (
    <TouchableOpacity style={styles.playlist} activeOpacity={0.7}>
      <Image
        style={{ width: "40%", height: "100%" }}
        source={{ uri: props.playlist.imageUrl }}
      />
      <Text style={styles.title} numberOfLines={2}>
        {props.playlist.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playlist: {
    width: 180,
    height: 70,
    backgroundColor: "#272828",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  title: {
    fontFamily: "circular-bold",
    color: "white",
    fontSize: 17,
    marginLeft: 15,
    maxWidth: 80,
    textAlign: "left",
  },
});

export default Playlist;
