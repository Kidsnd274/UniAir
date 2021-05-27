import React, {useState, createContext} from 'react';

export const ControllerContext = createContext();

export const ControllerProvider= props => {
    const [controllerDetails, setControllerDetails] = useState(
      {
        temperature: '37',
        fanSpeed: '1',
        ecoMode: 'on',
      }
    );

    return (
      <ControllerContext.Provider value = {[controllerDetails, setControllerDetails]}>
        {props.children}
      </ControllerContext.Provider>
    );
}