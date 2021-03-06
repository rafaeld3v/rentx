import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

import { CarDTO } from '../dtos/CarDTO';

const { Navigator, Screen } = createStackNavigator();

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  MyCars: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: {
    car: CarDTO;
  };
  SchedulingDetails: {
    car: CarDTO;
    dates: string[];
  };
  SchedulingComplete: undefined;
};

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />

      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />

      <Screen name="MyCars" component={MyCars} />

      <Screen name="CarDetails" component={CarDetails} />

      <Screen name="Scheduling" component={Scheduling} />

      <Screen name="SchedulingDetails" component={SchedulingDetails} />

      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
}
