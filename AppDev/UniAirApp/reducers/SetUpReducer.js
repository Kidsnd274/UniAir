import { get_aircon_data, send_aircon_data, toggle_power } from "../api/client";

const initalState = [
  {
    ipAddress: "192.168.1.80",
    port: "5000",
    roomName: "1",
    id: "1",
    controllerData: {
      aircon_power: false,
      aircon_temp: 1,
      aircon_fanspeed: 2,
      aircon_flap: 3,
      aircon_eco_mode: false,
      aircon_powerful_mode: false,
    },
  },
];

const SetUpReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTROLLER":
      return [
        ...state,
        {
          roomName: String(payload.roomName),
          ipAddress: String(payload.ipAddress),
          portNo: String(payload.portNo),
          controllerData: {
            id: String(payload.roomName),
            aircon_power: false,
            aircon_temp: 1,
          },
        },
      ];
      
    case "SUBMIT_TEMPERATURE":
      let copyState1 = [...state];
      const x = copyState.findIndex((x) => x.roomName === payload.id);
      copyState1[x].controllerData = {
        id: payload.id,
        aircon_power: payload.aircon_power,
        aircon_temp: payload.aircon_temp,
      };
      console.log(i);
      return [...copyState1];

    case "SUBMIT_POWER":
      let copyState = [...state];
      const i = copyState.findIndex((x) => x.roomName === payload.id);
      copyState[i].controllerData = {
        id: payload.id,
        aircon_power: payload.aircon_power,
        aircon_temp: payload.aircon_temp,
      };
      console.log(i);
      return [...copyState];

    default:
      return state;
  }
  return state;
};

export default SetUpReducer;
