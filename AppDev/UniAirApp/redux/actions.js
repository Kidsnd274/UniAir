import { arrayOf } from "prop-types";
import { fetchAirconData, sendAirconData } from "./api";
import { store } from "./store";

// TemperatureController Functions
export const togglePower = (airconId, newValue) => {
  const thunkFunction = (airconId, newValue) => (dispatch, getState) => {
    console.log("LOG: togglePower from redux/actions + newValue " + newValue);
    dispatch({
      type: "TOGGLE_POWER",
      payload: {
        id: airconId,
        newValue: newValue,
      },
    });
  };
  store.dispatch(thunkFunction(airconId, newValue));
  store.dispatch(sendAirconData(airconId)); // Send update to the server
};

export const changeTemperature = (airconId, newValue) => {
  const thunkFunction = (airconId, newValue) => (dispatch) => {
    console.log(
      "LOG: changeTemperature from redux/actions + newValue " + newValue
    );
    dispatch({
      type: "CHANGE_TEMP",
      payload: {
        id: airconId,
        newValue: newValue,
      },
    });
  };
  store.dispatch(thunkFunction(airconId, newValue));
  store.dispatch(sendAirconData(airconId));
};

export const updateFanSpeed = (airconId, newValue) => {
  const thunkFunction = (airconId, newValue) => (dispatch) => {
    console.log(
      "LOG: updateFanSpeed from redux/actions + newValue " + newValue
    );
    dispatch({
      type: "UPDATE_FAN_SPEED",
      payload: {
        id: airconId,
        newValue: newValue,
      },
    });
  };
  store.dispatch(thunkFunction(airconId, newValue));
  store.dispatch(sendAirconData(airconId)) // Send updates to server
};

export const toggleEcoMode = (airconId, newValue) => {
  const thunkFunction = (airconId, newValue) => (dispatch) => {
    console.log("LOG: toggleEcoMode from redux/actions + newValue " + newValue);
    dispatch({
      type: "TOGGLE_ECO_MODE",
      payload: {
        id: airconId,
        newValue: newValue,
      },
    });
  };
  store.dispatch(thunkFunction(airconId, newValue));
  store.dispatch(sendAirconData(airconId))
};

export const updateFlap = (airconId, newValue) => {
  const thunkFunction = (airconId, newValue) => (dispatch) => {
    console.log(
      "LOG: updateFanSpeed from redux/actions + newValue " + newValue
    );
    dispatch({
      type: "UPDATE_FAN_FLAP",
      payload: {
        id: airconId,
        newValue: newValue,
      },
    });
  };
  store.dispatch(thunkFunction(airconId, newValue));
  store.dispatch(sendAirconData(airconId)) // Send updates to server
};

export const togglePowerMode = (airconId, newValue) => {
  const thunkFunction = (airconId, newValue) => (dispatch) => {
    console.log(
      "LOG: togglePowerMode from redux/actions + newValue " + newValue
    );
    dispatch({
      type: "TOGGLE_POWER_MODE",
      payload: {
        id: airconId,
        newValue: newValue,
      },
    });
  };
  store.dispatch(thunkFunction(airconId, newValue));
  store.dispatch(sendAirconData(airconId));
};

export const updateTab = (airconId, newValue) => {
  const thunkFunction = (airconId, newValue) => (dispatch) => {
    console.log("LOG: updateTab from redux/actions + newValue " + newValue);
    dispatch({
      type: "UPDATE_TAB",
      payload: {
        id: airconId,
        newValue: newValue,
      },
    });
  };
  store.dispatch(thunkFunction(airconId, newValue));
  store.dispatch(sendAirconData(airconId));
};

//Adding New Controller
// export const addController = (ipAddress, port, roomName, aircon_model) => {
//   const thunkFunction =
//     (ipAddress, port, roomName, aircon_model) => (dispatch, getState) => {
//       console.log("LOG: ADD_CONTROLLER ");
//       console.log(getState().airconReducer.aircons.length)
      
//       dispatch({
//         type: "ADD_CONTROLLER",
//         payload: {
//           ipAddress: ipAddress,
//           port: port,
//           roomName: roomName,
//           aircon_model: aircon_model,
//           aircon_id: getState().airconReducer.aircons.length
//         },
//       });
//     };
//   store.dispatch(thunkFunction(airconId, newValue));
//   // store.dispatch(sendAirconData(airconId))
// };

// API functions
export const updateAirconData = (airconId) => {
  return store.dispatch(fetchAirconData(airconId));
};
