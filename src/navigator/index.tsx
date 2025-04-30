import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardTabNavigation from '@/navigator/DashboardTabNavigation';

const Stack = createNativeStackNavigator();

const MainNavigation = (props: any) => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName={props.initialScreen}>
                <Stack.Screen
                    name="Dashboard"
                    component={DashboardTabNavigation}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </View>
    );
};

export default MainNavigation;