import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabBar from '@/components/common/TabBar';

import Home from '@/screens/Home';
import My from '@/screens/My';
import Setting from '@/screens/Setting';

const Tab = createMaterialTopTabNavigator();

const DashboardTabNavigation = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBar={(props: any) => <TabBar {...props} />}
        initialRouteName="Home"
        screenOptions={{
          tabBarPressColor: 'transparent',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <Text style={{ color: focused ? '#FFFFFF' : '#007AFF' }}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={My}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ focused }) => (
              <Text style={{ color: focused ? '#FFFFFF' : '#007AFF' }}>🔍</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Setting}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ focused }) => (
              <Text style={{ color: focused ? '#FFFFFF' : '#007AFF' }}>🛒</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DashboardTabNavigation;