const news = (news = null, action) => {
  switch (action.type) {
    case "INIT_NEWS":
      return action.payload;
    default:
      return news;
  }
};

export default news;
