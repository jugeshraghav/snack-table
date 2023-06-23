export const initial_state = {
  searchText: "",
};

export const filterReducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "set_search_text":
      return {
        ...state,
        searchText: payLoad,
      };
    default:
      return state;
  }
};
