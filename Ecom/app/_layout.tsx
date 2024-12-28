import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import ContextProvider from "./Provider/ContextProvider";

export default function MainLayout() {
    return(
        <ContextProvider>
        <StatusBar hidden={false} animated={true} backgroundColor={'transparent'} barStyle={'dark-content'}/>
        <Stack screenOptions={{headerShown:false}}>
        </Stack>
        </ContextProvider>
    )
}