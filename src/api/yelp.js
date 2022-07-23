import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer iWQXQDsSSbrjCQ0jlI1F5WKdwrriocDdlIB49wA8adWOk3oY_YYUTxNSKKcEsX8xC-NVlo1mWWc8ipq1T0PdDZqHCeylrisE_sELLD8kGk_rf4A3KUisoMo0yi3YYnYx",
  },
});
