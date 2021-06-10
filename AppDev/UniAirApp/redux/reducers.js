const initialState = {
  aircons: [
    {
      ipAddress: "192.168.1.80",
      port: "5000",
      roomName: "Living Room",
      id: "0",
      aircon_tab: "1",
      controllerData: {
        date_and_time: "",
        aircon_power: false,
        aircon_temp: 24,
        aircon_fanspeed: 2,
        aircon_flap: 3,
        aircon_eco_mode: false,
        aircon_powerful_mode: false,
      },
    },
  ],
  settings: {
    something_here: 0,
  },
};

function airconReducer(state = initialState, action) {
  let newArray = [...state.aircons];
  switch (action.type) {
    case "TOGGLE_POWER":
      newArray[action.payload.id].controllerData.aircon_power =
        action.payload.newValue;
      return { ...state, aircons: newArray };
    case "CHANGE_TEMP":
      newArray[action.payload.id].controllerData.aircon_temp =
        action.payload.newValue;
      return { ...state, aircons: newArray };
    case "UPDATE_AIRCON_DATA":
      newArray[action.payload.id].controllerData = action.payload.newValue;
      return { ...state, aircons: newArray };
    case "UPDATE_TAB":
      newArray[action.payload.id].aircon_tab = action.payload.newValue;
      return { ...state, aircons: newArray };
    case "UPDATE_FAN_SPEED":
      newArray[action.payload.id].controllerData.aircon_fanspeed = action.payload.newValue;
      return { ...state, aircons: newArray };
    case "TOGGLE_ECO_MODE":
      newArray[action.payload.id].controllerData.aircon_eco_mode = action.payload.newValue;
      return { ...state, aircons: newArray };
      case "TOGGLE_POWER_MODE":
        newArray[action.payload.id].controllerData.aircon_powerful_mode = action.payload.newValue;
        return { ...state, aircons: newArray };

    default:
      return state;
  }
}

export default airconReducer;
