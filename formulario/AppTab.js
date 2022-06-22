import React from 'react'
import AppList from './AppList'
import AppForm from './AppForm'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function AppTab() {

    const TabBar = createBottomTabNavigator()

  return (
    <TabBar.Navigator>
        <TabBar.Screen name="AppList" component={AppList}/>
        <TabBar.Screen name="AppForm" component={AppForm}/>
    </TabBar.Navigator>
  )
}