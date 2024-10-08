import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function RootLayout() {

  return (
    <Tabs screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen 
      name="index"
      options={{
        title: 'Home', 
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'}
          color={color} />
        )
      }}/>
      <Tabs.Screen 
      name="data"
      options={{
        title: 'Data',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'}
          color={color} />
        )
      }}/>
    </Tabs>
  );
}
