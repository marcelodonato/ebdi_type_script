import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../../modules/home/screens/home";
import Profile from "../../modules/profile/screens/profile";
import Favorites from "../../modules/favorites/screens/favorites";
import Event from "../../modules/event/screens/event";
import { colors } from "../../res/colors/colors";

type TabParamList = {
    Home: undefined;
    Eventos: undefined;
    Favoritos: undefined;
    Perfil: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const FooterBar: React.FC = () => {
    return (
        <SafeAreaProvider>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        const icons: Record<keyof TabParamList, string> = {
                            Home: "home-outline",
                            Eventos: "calendar-outline",
                            Favoritos: "star-outline",
                            Perfil: "person-outline",
                        };
                        return <Ionicons name={icons[route.name]} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: colors.darkBlue,
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: { backgroundColor: colors.light, paddingBottom: 5 },
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Eventos" component={Event} />
                <Tab.Screen name="Favoritos" component={Favorites} />
                <Tab.Screen name="Perfil" component={Profile} />
            </Tab.Navigator>
        </SafeAreaProvider>
    );
};

export default FooterBar;
