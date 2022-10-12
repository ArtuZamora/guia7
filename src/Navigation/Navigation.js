import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dog from '../screens/Dog';
import Cat from '../screens/Cat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: [
                {
                    "display": "flex",
                    "height": 60,
                    "paddingBottom": 7,
                }
            ],
            tabBarLabelStyle: [
                {
                    "fontSize": 15
                }
            ],
            tabBarOptions: [{
                //other properties
                pressColor: 'gray',//for click (ripple) effect color
                style: {
                    backgroundColor: 'gray',//color you want to change
                }
            }]
        }}
        >
            <Tab.Screen
                name="dog"
                component={Dog}
                options={{
                    title: 'Perros',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name='dog'
                            type='font-awesome-5'
                            color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="cat"
                component={Cat}
                options={{
                    title: 'Gatos',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name='cat'
                            type='font-awesome-5'
                            color={color} />
                    )
                }} />
        </Tab.Navigator>
    );
}
