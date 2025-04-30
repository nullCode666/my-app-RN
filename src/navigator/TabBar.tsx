import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
  tabBarWidth?: number;
  tabBarHeight?: number;
}

const TabBar: React.FC<TabBarProps> = ({
  state,
  descriptors,
  navigation,
  tabBarWidth = width - 48,
  tabBarHeight = 67,
}) => {
  const insets = useSafeAreaInsets();
  const bottomSafeAreaSpace = insets.bottom;
  const tabBarBottomMargin = bottomSafeAreaSpace > 0 ? bottomSafeAreaSpace : 21;
  const tabWidth = tabBarWidth / state.routes.length;

  return (
    <View
      style={[
        styles.container,
        {
          width: tabBarWidth,
          height: tabBarHeight,
          bottom: tabBarBottomMargin,
        },
      ]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[
              styles.tabItem,
              {
                backgroundColor: isFocused ? '#007AFF' : 'transparent',
                width: tabWidth - 12,
              },
            ]}>
            {options.tabBarIcon?.({ focused: isFocused })}
            <Text
              style={[
                styles.tabText,
                {
                  color: isFocused ? '#FFFFFF' : '#007AFF',
                },
              ]}>
              {options.tabBarLabel || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    paddingHorizontal: 6,
    position: 'absolute',
    left: 24,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  tabItem: {
    height: '85%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
});

export default TabBar;