import { createDrawerNavigator } from "@react-navigation/drawer";
import {Feather} from '@expo/vector-icons';

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
  return(
    <Drawer.Navigator screenOptions={{title: ''}}>
      <Drawer.Screen 
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({size, color}) => <Feather name='home' size={size} color={color}/>,
          drawerLabel: 'Inicio'
        }}
      />
      
      <Drawer.Screen 
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({size, color}) => <Feather name='user' size={size} color={color}/>,
          drawerLabel: 'Perfil'
        }}
      />
    </Drawer.Navigator>
  )
}