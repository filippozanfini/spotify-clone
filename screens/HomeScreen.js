import React from "react";
import { View, ScrollView, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";

import { ARTISTS, PLAYLIST, SPOTIFYPLAYLISTS } from "../data/sample_data";
import Playlist from "../components/Playlist";
import CoverItem from "../components/CoverItem";
import ArtistItem from "../components/ArtistItem";

import { LinearGradient } from "expo-linear-gradient";

const renderPlaylists = (itemData) => {
  return <Playlist playlist={itemData.item} />;
};

const renderSpotifyPlaylists = (itemData) => {
  return <CoverItem item={itemData.item} />;
};

const renderArtists = (itemData) => {
  return <ArtistItem artist={itemData.item} />;
};

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ flex: 1, height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient colors={["#9FC3D1", "#3D3D3D", "black"]}>
          <Header />
          <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{
              alignItems: "center",
            }}
            data={PLAYLIST}
            renderItem={renderPlaylists}
            scrollEnabled={false}
            numColumns={2}
          />
        </LinearGradient>
        <Text
          style={{
            color: "white",
            fontFamily: "circular-bold",
            fontSize: 24,
            marginTop: 30,
            marginLeft: 10,
          }}
        >
          Relax for every moment
        </Text>
        <FlatList
          data={SPOTIFYPLAYLISTS}
          renderItem={renderSpotifyPlaylists}
          horizontal
          style={{ marginTop: 30 }}
          showsHorizontalScrollIndicator={false}
        />
        <Text
          style={{
            color: "white",
            fontFamily: "circular-bold",
            fontSize: 24,
            marginTop: 30,
            marginLeft: 10,
          }}
        >
          Your favorite artists
        </Text>
        <FlatList
          data={ARTISTS}
          renderItem={renderArtists}
          horizontal
          style={{ marginTop: 30 }}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
