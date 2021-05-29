import * as React from 'react';
import { Button, View, Text  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Test from './Test'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const dataSet = [{name : 'a'}, {name : 'b'}]
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        {dataSet.map(x => <Drawer.Screen name={x.name} component={CustomComponenet(x)} />)}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}




function CustomComponenet(x){
  return (
    () => {
      return <Test data = {x}/>;
    }
  );
}
 const MiniComp = () => {
   return(
     <Text>Gi</Text>
   )
 }