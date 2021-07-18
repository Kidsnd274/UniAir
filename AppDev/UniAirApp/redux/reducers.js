const initialState = {
  aircons: [
    {
      ipAddress: "192.168.1.83",
      port: "5000",
      roomName: "Living Room",
      id: 0,
      aircon_tab: "1",
      testController: true,
      controllerData: {
        date_and_time: "",
        aircon_power: false,
        aircon_temp: 24,
        aircon_fanspeed: 2,
        aircon_flap: 3,
        aircon_eco_mode: false,
        aircon_powerful_mode: false,
      },
      controllerConfig: {
        max_aircon_temp: 31,
        min_aircon_temp: 16,
        max_aircon_fanspeed: 4,
        min_aircon_fanspeed: 0,
        max_aircon_flap: 4,
        min_aircon_flap: 0,
      },
      scheduler: [
        {
          id: 1,
          date_and_time: "",
          aircon_power: false,
          aircon_temp: 24,
          aircon_fanspeed: 2,
          aircon_flap: 3,
          aircon_eco_mode: false,
          aircon_powerful_mode: false,
        },
      ],
    },
    {
      ipAddress: "192.168.1.81",
      port: "5001",
      roomName: "Toliet",
      id: 1,
      aircon_tab: "1",
      testController: true,
      controllerData: {
        date_and_time: "",
        aircon_power: false,
        aircon_temp: 24,
        aircon_fanspeed: 2,
        aircon_flap: 3,
        aircon_eco_mode: false,
        aircon_powerful_mode: false,
      },
      controllerConfig: {
        max_aircon_temp: 30,
        min_aircon_temp: 20,
        max_aircon_fanspeed: 4,
        min_aircon_fanspeed: 0,
        max_aircon_flap: 4,
        min_aircon_flap: 0,
      },
      scheduler: [
        {
          id: 1,
          date_and_time: "",
          aircon_power: false,
          aircon_temp: 24,
          aircon_fanspeed: 2,
          aircon_flap: 3,
          aircon_eco_mode: false,
          aircon_powerful_mode: false,
        },
        {
          id: 2,
          date_and_time: "",
          aircon_power: true,
          aircon_temp: 25,
          aircon_fanspeed: 2,
          aircon_flap: 3,
          aircon_eco_mode: false,
          aircon_powerful_mode: false,
        },
        {
          id: 3,
          date_and_time: "",
          aircon_power: true,
          aircon_temp: 25,
          aircon_fanspeed: 2,
          aircon_flap: 3,
          aircon_eco_mode: false,
          aircon_powerful_mode: false,
        },
        {
          id: 4,
          date_and_time: "",
          aircon_power: true,
          aircon_temp: 25,
          aircon_fanspeed: 2,
          aircon_flap: 3,
          aircon_eco_mode: false,
          aircon_powerful_mode: false,
        },
      ],
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
      newArray[action.payload.id].controllerData.aircon_fanspeed =
        action.payload.newValue;
      return { ...state, aircons: newArray };
    case "TOGGLE_ECO_MODE":
      newArray[action.payload.id].controllerData.aircon_eco_mode =
        action.payload.newValue;
      return { ...state, aircons: newArray };
    case "TOGGLE_POWER_MODE":
      newArray[action.payload.id].controllerData.aircon_powerful_mode =
        action.payload.newValue;
      return { ...state, aircons: newArray };
    case "UPDATE_FAN_FLAP":
      newArray[action.payload.id].controllerData.aircon_flap =
        action.payload.newValue;
      return { ...state, aircons: newArray };
    case "ADD_CONTROLLER":
      newArray.push(action.payload);
      return { ...state, aircons: newArray };
    case "REMOVE_CONTROLLER":
      for (let index = action.airconId + 1; index < newArray.length; index++) {
        newArray[index].id -= 1;
      }
      console.log("For loop done");
      newArray.splice(action.airconId, 1);
      return { ...state, aircons: newArray };

    case "RESTORE_FIRESTORE":
      newArray = action.payload.acConfig;
      return { ...newArray };

    case "ADD_CONTROLLER":
      newArray[action.airconId].scheduler.push({
        id: action.id,
        date_and_time: "",
        aircon_power: action.aircon_power,
        aircon_temp: action.aircon_temp,
        aircon_fanspeed: action.aircon_fanspeed,
        aircon_flap: action.aircon_flap,
        aircon_eco_mode: action.aircon_eco_mode,
        aircon_powerful_mode: action.aircon_powerful_mode,
      });
      return {...newArray}

    default:
      return state;
  }
}

export default airconReducer;
