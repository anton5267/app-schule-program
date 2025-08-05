import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SubjectsListScreen from './screens/SubjectsListScreen';
import SubjectTopicsScreen from './screens/SubjectTopicsScreen';
import HomeworkScreen from './screens/HomeworkScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SubjectsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SubjectsList" component={SubjectsListScreen} options={{ title: 'Предметы' }} />
            <Stack.Screen name="SubjectTopics" component={SubjectTopicsScreen} options={{ title: 'Темы' }} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { height: 58, borderTopColor: '#eee' },
                    tabBarIcon: ({ color, size, focused }) => {
                        let name = 'book-outline';
                        if (route.name === 'Subjects') name = focused ? 'book' : 'book-outline';
                        if (route.name === 'Homework') name = focused ? 'document-text' : 'document-text-outline';
                        if (route.name === 'Profile') name = focused ? 'person' : 'person-outline';
                        return <Ionicons name={name} size={22} color={focused ? '#1a73e8' : '#8b8b8b'} />;
                    },
                })}
            >
                <Tab.Screen name="Subjects" component={SubjectsStack} />
                <Tab.Screen name="Homework" component={HomeworkScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
