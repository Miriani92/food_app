import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ item }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={{ marginHorizontal: 10 }}>
        {item.rating} Stars ,{item.riview_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default ResultsDetail;
