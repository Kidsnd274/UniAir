const initalState = [
  {
    ipAddress: "1",
    port: "1",
    roomName: "1",
    controllerData: {Id: "1", Power: false ,temperatureDisplay: 1 }
  }
]

const SetUpReducer = (state = initalState, action) => {
  const {type, payload} = action;

  switch (type) {
    case "ADD_CONTROLLER":
      return [...state, {
        roomName: String(payload.roomName),
        ipAddress: String(payload.ipAddress),
        portNo: String(payload.portNo),
        controllerData: {Id: String(payload.roomName) , Power: false ,temperatureDisplay: 1}
      }]
    case "SUBMIT_TEMPERATURE":
      let copyState = [...state];
      const i = copyState.findIndex(x => x.roomName === payload.id);
      copyState[i].controllerData = {Id: payload.id , Power: payload.power ,temperatureDisplay: payload.temperatureDisplay}
      console.log(i)
      return [...copyState];

      default: 
      return state;
  }
  return state;
}

export default SetUpReducer;