export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //token:
  //"BQDI34SVZrXNz_4sRPYqHmgiaBj0AXQlHoS-WWyVGpZ4iNesRXsv9EEzNHFMAg0AmDucVgDuiPSSiql65fAvoiBh5LXkBDAan0S2-CWgTWjBeQqYR3Jwx32MMw5hrzcc1sph33J9g_RTKWm2cdSMk2qkJfKN2z227GsoNG0ylCQtHiho",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
