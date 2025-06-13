import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Exemplos from '../exemplos';
import Atividades from '../atividades';

const TabNavigation = createBottomTabNavigator();

export default function Tab() {
    return (
        <TabNavigation.Navigator>
            <TabNavigation.Screen name="Exemplos" component={Exemplos} />
            <TabNavigation.Screen name="Atividades" component={Atividades} />
        </TabNavigation.Navigator>
    );
};
