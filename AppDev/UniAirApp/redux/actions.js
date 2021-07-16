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
export const addController = (ipAddress, port, roomName, token) => {
  const thunkFunction =
    (ipAddress, port, roomName, token) => (dispatch, getState) => {
      console.log("LOG: ADD_CONTROLLER at redux/actions.js");
      const newAirconId = getState().airconReducer.aircons.length
      dispatch({
        type: "ADD_CONTROLLER",
        payload: {
          ipAddress: ipAddress,
          port: port,
          roomName: roomName,
          token: token,
          id: newAirconId,
          aircon_tab: "1",
          testController: false,
          // Default values that should change
          controllerData: { // Might remove this in the future as the program will pull fresh data when server is authenticated
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
          }
        },
      });
      updateAirconData(newAirconId);
    };
  store.dispatch(thunkFunction(ipAddress, port, roomName, token));
};

export const addTestController = (roomName) => {
  const thunkFunction = (roomName) => (dispatch, getState) => {
    dispatch({ // Test Controller
      type: "ADD_CONTROLLER",
      payload: {
        roomName: roomName,
        id: getState().airconReducer.aircons.length,
        aircon_tab: "1",
        testController: true,
        // Default values that should change
        controllerData: {
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
        }
      },
    });
  }
  store.dispatch(thunkFunction(roomName))
}

export const removeController = (airconId) => {
  const thunkFunction = (airconId) => (dispatch) => {
    console.log("LOG: Remove controller " + airconId);
    dispatch({
      type: "REMOVE_CONTROLLER",
      airconId: airconId,
    })
  }
  store.dispatch(thunkFunction(airconId));
}

export const restoreFireStore = (acConfig) => {
  const thunkFunction = (acConfig) => (dispatch) => {
    console.log("LOG: Restore " + acConfig);
    dispatch({
      type: "RESTORE_FIRESTORE",
      acConfig: acConfig,
    })
  }
  store.dispatch(thunkFunction(acConfig));
}
// API functions
export const updateAirconData = (airconId) => {
  return store.dispatch(fetchAirconData(airconId));
};


