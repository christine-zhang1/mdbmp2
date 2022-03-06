import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Receive the movieItem by destructuring route params.
  const {movieItem} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
        <Image
          style={styles.container} // fix
          source={{uri: movieItem.posterurl}}
        />       
        <Text style={styles.h1}>{movieItem.title}</Text>
        <Text style={styles.h2}></Text>
        <Text style={styles.h2}>Released {movieItem.year}</Text>
        <Text style={styles.h2}>{movieItem.genres.join(", ")}</Text>
        <Text style={styles.h2}></Text>
        <Text style={styles.h2}>{movieItem.actors.join(", ")}</Text>
        <Text style={styles.h4}>{movieItem.storyline}</Text>
        
      </ScrollView>
    </SafeAreaView>
  );
}
