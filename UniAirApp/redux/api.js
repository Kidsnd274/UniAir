import axios from 'axios'

const axiosTimeout = 5000
const axiosInstance = axios.create({
    timeout: axiosTimeout,
})

export const fetchAirconData = airconId => async (dispatch, getState) => {
    console.log("LOG: getAirconId called with ID " + airconId + " from redux/api")
    const state = getState().airconReducer.aircons[airconId]
    if (state.testController) {
        console.log("DEBUG: Test Controller, no data received")
    } else {
        const ipAddress = state.ipAddress
        const port = state.port
        const token = state.token

        const options = {
            method: 'get',
            url: "http://" + ipAddress + ":" + port + "/api/aircon_data",
            headers: {
                "Authorization": `Bearer: ${token}`,
            }
        }

        const response = await axiosInstance(options)
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
    }
};

export const sendAirconData = airconId => async (dispatch, getState) => {
    console.log("LOG: sendAirconData called with ID " + airconId + " from redux/api")
    const state = getState().airconReducer.aircons[airconId]
    if (state.testController) {
        console.log("DEBUG: Test Controller, no data sent")
    } else {
        const ipAddress = state.ipAddress
        const port = state.port
        const token = state.token
        const payload = state.controllerData

        const options = {
            method: 'post',
            url: "http://" + ipAddress + ":" + port + "/api/aircon_data",
            data: payload,
            headers: {
                "Authorization": `Bearer: ${token}`,
                "Content-Type": "application/json",
            }
        }
    
        const response = axiosInstance(options).catch((error) => 
            console.error("ERROR:", error)
        );
    }
}

export const isServerSetupYet = async (ipAddress, port) => {
    const response = await axiosInstance
        .get("http://" + ipAddress + ":" + port + "/setup/is_setup")
        .catch(error => console.error("Error:", error))
    return response.data['is_setup']
}

export const serverSetup = async (ipAddress, port, payload) => {
    let formData = new FormData();
    formData.append("aircon_model", payload['aircon_model']);
    formData.append("lircd_address", payload['lircd_address']);
    formData.append("password", payload['password']);
    const response = await axiosInstance
        .post("http://" + ipAddress + ":" + port + "/setup/register", formData, headers={
            "Content-Type": "multipart/form-data"
        })
        .catch(error => console.error("Error:", error))
    console.log(response)
    return response;
}

export const getToken = async (ipAddress, port, password) => {
    let payload = {
        password: password,
    }
    const options = {
        method: 'post',
        url: "http://" + ipAddress + ":" + port + "/auth/get_token",
        data: payload,
        headers: {
            "Content-Type": "application/json",
        }
    }
    const response = await axiosInstance(options)
        .catch((error) => console.error("ERROR:", error));
    if (response.status == 200) {
        return {
            token: response.data.token,
            error: null,
        }
    } else {
        return {
            error: response,
        }
    }
}