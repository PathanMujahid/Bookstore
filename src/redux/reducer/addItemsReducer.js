const ADDITEM = "ADDITEM";
const DELITEM = "DELITEM";

const initialState = [];

const addItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEM:
      console.log("State : ", action.payload);
      return [...state, action.payload];

    case DELITEM:
      return state.filter((x) => x.id !== action.payload.id);

    default:
      return state;
  }
};

export default addItemsReducer;
