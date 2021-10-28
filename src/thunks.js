export const changeTab = (tab) => {
  return (dispatch) => {
    dispatch({ type: "INIT_TAB", payload: tab });
  };
};

export const fetchNews = (value) => {
  return async (dispatch) => {
    const news = await fetch(
      `https://newscatcher.p.rapidapi.com/v1/search_free?q=${value}&lang=en&media=True`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
          "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        },
      }
    );
    const json = await news.json();
    console.log(json);

    dispatch({ type: "INIT_NEWS", payload: json.articles });
  };
};
