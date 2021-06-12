import axios from 'axios'

const axiosTimeout = 5000
const axiosInstance = axios.create({
    timeout: axiosTimeout,
})

export const fetchAirconData = airconId => async (dispatch, getState) => {
    console.log("LOG: getAirconId called with ID " + airconId + " from redux/api")
    const state = getState().airconReducer.aircons[airconId]
    const ipAddress = state.ipAddress
    const port = state.port

    const response = await axiosInstance
        .get("http://" + ipAddress + ":" + port + "/api/aircon_data")
        .catch((error) => console.error("Error:", error));
    console.log(response.data)
    if (response.data != "unexpected end of stream") {
        console.log("LOG: Dispatching... UPDATE_AIRCON_DATA from redux/api/getAirconData");
        dispatch({
        type: "UPDATE_AIRCON_DATA",
        payload: {
            id: airconId,
            newValue: response.data,
        },
        });
    } else {
        console.error(
        "ERROR: Something happened when fetching aircon data\nresponse.data = " +
            response.data
        );
    }
};

export const sendAirconData = airconId => async (dispatch, getState) => {
    console.log("LOG: sendAirconData called with ID " + airconId + " from redux/api")
    const state = getState().airconReducer.aircons[airconId]
    const ipAddress = state.ipAddress
    const port = state.port
    const payload = state.controllerData
    
    const options = {
        method: 'post',
        url: "http://" + ipAddress + ":" + port + "/api/aircon_data",
        data: payload,
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = axiosInstance(options).catch((error) => 
        console.error("ERROR:", error)
    );
}