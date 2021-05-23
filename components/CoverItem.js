import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const CoverItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={{ uri: props.item.imageUrl }}
        style={{ width: 150, height: 150 }}
      />
      <Text
        style={{
          fontFamily: "circular-book",
          color: "#ccc",
          height: 50,
          width: "85%",
          marginTop: 10,
        }}
        numberOfLines={2}
      >
        {props.item.description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 175,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CoverItem;
