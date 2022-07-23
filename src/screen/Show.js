import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";
import { FlatList, Image } from "react-native";

import { View, Text } from "react-native";
const Show = ({ navigation }) => {
  const [result, setResult] = useState([]);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.image}
        keyExtractor={(image) => image}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default Show;
