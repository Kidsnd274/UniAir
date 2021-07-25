const initialState = {
  aircons: [
    // r
  ],
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
    case  "EDIT_CONTROLLER":
      newArray[action.payload.id].ipAddress = action.payload.ipAddress
      newArray[action.payload.id].port = action.payload.port
      newArray[action.payload.id].roomName = action.payload.roomName
      return { ...state, aircons: newArray };
      
    case "REMOVE_CONTROLLER":
      for (let index = action.airconId + 1; index < newArray.length; index++) {
        newArray[index].id -= 1;
      }
      console.log("For loop done");
      newArray.splice(action.airconId, 1);
      return { ...state, aircons: newArray };

    case "RESTORE_FIRESTORE":
      newArray = action.acConfig;
      console.log(newArray)
      return { ...state, aircons: newArray };

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
