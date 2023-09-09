import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Feed from '../screens/Feed'
import New from '../screens/New'

import {Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name='feed'
        component={Feed}
        options={{
          tabBarIcon: ({size, color}) => <Feather name='home' size={size} color={color}/>,
          tabBarLabel: 'Inicio'
        }}
      />
      
      <Tab.Screen 
        name='new'
        component={New}
        options={{
          tabBarIcon: ({size, color}) => <Feather name='plus-circle' size={size} color={color}/>,
          tabBarLabel: 'Novo'
        }}
      />
    </Tab.Navigator>
  )
}