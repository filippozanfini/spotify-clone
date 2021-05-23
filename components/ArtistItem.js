import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const ArtistItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={{ uri: props.artist.imageUrl }}
        style={{ width: 150, height: 150 }}
        borderRadius={80}
        resizeMode="stretch"
      />
      <Text
        style={{
          fontFamily: "circular-book",
          color: "white",
          height: 50,
          width: "85%",
          marginTop: 12,
          textAlign: "center",
          fontSize: 17,
        }}
        numberOfLines={2}
      >
        {props.artist.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 175,
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ArtistItem;
