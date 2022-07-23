import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChange, onSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={(char) => onChange(char)}
        onEndEditing={() => onSubmit()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: "gray",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
export default SearchBar;
