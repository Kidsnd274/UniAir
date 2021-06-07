import axios from "axios";
// import { getAirconData } from './api'

const axiosInstance = axios.create({
  timeout: 5000,
});

export const togglePower = (airconId, newValue) => (dispatch) => {
  console.log("Toggle Power");
  dispatch({
    type: "TOGGLE_POWER",
    payload: {
      id: airconId,
      newValue: newValue,
    },
  });
  // sendAirconData(airconList[airconId].ipAddress, airconList[airconId].port, airconId, dispatch)
};

export const changeTemperature = (airconId, newValue) => (dispatch) => {
  console.log("Temperature adjusted");
  dispatch({
    type: "CHANGE_TEMP",
    payload: {
      id: airconId,
      newValue: newValue,
    },
  });
  // sendAirconData(airconList[airconId].ipAddress, airconList[airconId].port, airconId, dispatch)
};

// Doesn't work
// export const dispatchAirconData = (dispatch, payload) => {
//   dispatch({
//     type: "UPDATE_AIRCON_DATA",
//     newValue: payload,
//   });
// };

export const fetchAirconData = async (ipAddress, port, airconId, dispatch) => {
  console.log("fetchAirconData called");
  const response = await axiosInstance
    .get("http://" + ipAddress + ":" + port + "/api/aircon_data")
    .catch((error) => console.error("Error:", error));
  if (response.data != "unexpected end of stream") {
    console.log("Dispatching... GET_AIRCON_DATA");
    dispatch({
      type: "UPDATE_AIRCON_DATA",
      payload: {
        id: airconId,
        newValue: response.data,
      }
    });
  } else {
    console.error(
      "ERROR: Something happened when fetching aircon data\nresponse.data = " +
        response.data
    );
  }
};

// Trying to access the store from './api' and trying to chuck api calls there (not working tho)
// export const fetchAirconData = airconId => {
//     return async (dispatch) => {
//         const response = await getAirconData(airconId).get()
//             .catch(error => console.error("Error:", error));
//         if (response.data != "unexpected end of stream") {
//             console.log("Dispatching... GET_AIRCON_DATA")
//             // dispatchAirconData(dispatch, response.data)
//             dispatch({
//                 type: 'UPDATE_AIRCON_DATA',
//                 newValue: response.data,
//             })
//         } else {
//             console.error("ERROR: Something happened when fetching aircon data\nresponse.data = " + response.data);
//         }
//     }
// }

// Not working also
export const sendAirconData = async (ipAddress, port, airconId, dispatch) => {
  console.log("sendAirconData called");
  // var airconData = airconList[airconId].controllerData
  const options = {
    method: "post",
    url: "http://" + ipAddress + ":" + port + "/api/aircon_data",
    // data: airconData,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = axiosInstance(options).catch((error) =>
    console.error("Error:", error)
  );
  if (response.data != "unexpected end of stream") {
    console.log("Dispatching... GET_AIRCON_DATA");
    dispatch({
      type: "UPDATE_AIRCON_DATA",
      newValue: response.data,
    });
  } else {
    console.error(
      "ERROR: Something happened when fetching aircon data\nresponse.data = " +
        response.data
    );
  }
};
