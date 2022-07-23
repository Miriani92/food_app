import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError("something went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, error];
};
