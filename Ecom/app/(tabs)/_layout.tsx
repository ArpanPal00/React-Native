import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function RootLayout() {
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: 'transparent', headerShown:false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={28} color="#B2B8A5" />,
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <MaterialIcons name="category" size={28} color="#B2B8A5" />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <AntDesign name="setting" size={28} color="#B2B8A5" />,
        }}
      />
    </Tabs>
    )
}