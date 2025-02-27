import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../modules/home/home";
import Profile from "../modules/profile/screens/profile";

type TabParamList = {
    Home: undefined;
    Search: undefined;
    Notifications: undefined;
    Profile: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

const FooterBar: React.FC = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        const icons: Record<keyof TabParamList, string> = {
                            Home: "home-outline",
                            Search: "search-outline",
                            Notifications: "notifications-outline",
                            Profile: "person-outline",
                        };
                        return <Ionicons name={icons[route.name]} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#6200ea",
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 },
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Home} />
                <Tab.Screen name="Notifications" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />

            </Tab.Navigator>
        </>
    )
};

export default FooterBar;