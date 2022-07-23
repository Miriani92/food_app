import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsScree from "./components/ResultsScree";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onChange={(newTerm) => setTerm(newTerm)}
        onSubmit={() => searchApi(term)}
      />
      <Text style={styles.hor}>Search</Text>
      {error ? <Text>{error}</Text> : null}
      <Text style={styles.hor}>we found {results.length} of results</Text>
      <ScrollView>
        <ResultsScree
          navigation={navigation}
          result={filterByPrice("$")}
          title="Const effective"
        />
        <ResultsScree
          navigation={navigation}
          result={filterByPrice("$$")}
          title="Bit pricier"
        />
        <ResultsScree
          navigation={navigation}
          result={filterByPrice("$$")}
          title="Most speneder"
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  hor: {
    marginHorizontal: 10,
  },
});
export default SearchScreen;
