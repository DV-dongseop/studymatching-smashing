import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  
}

function StudyScreen() {
  
}

function NotificationScreen() {
  
}

function MypageScreen() {
  
}

function BottomTabNavigationApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" 
        screenOptions={{
          tabBarActiveTintColor: '#3D4AE7',
          
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Study"
          component={StudyScreen}
          options={{
            title: '스터디',
            tabBarIcon: ({color, size}) => (
              <Icon name="menu-book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: '게시판',
            tabBarIcon: ({color, size}) => (
              <Icon name="dashboard" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MypageScreen}
          options={{
            title: '마이페이지',
            tabBarIcon: ({color, size}) => (
              <Icon name="contact-page" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigationApp;