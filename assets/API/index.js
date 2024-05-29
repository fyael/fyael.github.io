const { getJson } = require("serpapi");

getJson({
  api_key: "d2f9750d9d5ef29cf13008f8cb696d7725955f17dcb2dea1cdad37ff75f0ffc8",
  engine: "google_scholar_author",
  hl: "en",
  author_id: "S1K3A6wAAAAJ"
}, (json) => {
  console.log(json);
});
