import React, {useState, createContext} from 'react';

export const DataContext = createContext();

export const DataProvider = props => {
  const [data, setData] = useState([{name: '', price:''}]);

  return (
    <DataContext.Provider data = {data}>
      {props.children}
    </DataContext.Provider>
  )
}