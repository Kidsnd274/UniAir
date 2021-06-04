import axios from 'axios';
import { State } from 'react-native-gesture-handler';

export const GET_AIRON_DATA = 'GET_AIRCON_DATA';

const IP_ADDRESS = "192.168.1.80"
const PORT = "5000"
const BASE_URL = IP_ADDRESS + ":" + PORT

export const getAirconData = () => {
    return async dispatch => {
        try {
            const res = await axios.get(BASE_URL + "/api/aircon_data")
            if (res.data) {
                dispatch({
                    type: GET_AIRON_DATA,
                    payload: res.data,
                });
            } else {
                console.log("Unable to fetch");
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const togglePower = (airconId, newValue) => dispatch => {
    console.log("Toggle Power")
    dispatch({
        type: "TOGGLE_POWER",
        payload: {
            id: airconId,
            newValue: newValue
        }
    })

}

export const changeTemperature = (airconId, newValue) => dispatch => {
    console.log("Temperature adjusted")
    dispatch({
        type: "CHANGE_TEMP",
        payload: {
            id: airconId,
            newValue: newValue
        }
    })
}