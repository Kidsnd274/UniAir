import axios from 'axios'
import store from "./store"

const axiosTimeout = 5000

function storeControllerData(airconId) {
    console.log(store.getState())
    // return store.getState().airconReducer.aircons[airconId]
}

export function getAirconData(airconId) {
    // const controllerData = store.getState()
    console.log(store.getState())

    // const ipAddress = storeControllerData(airconId).ipAddress
    // const port = storeControllerData(airconId).port

    const url = "http://" + ipAddress + ":" + port + "/api/aircon_data"

    return axiosInstance.create({
        url: 'url',
        timeout: axiosTimeout,
    })
}

function sendAirconData(airconId) {


}