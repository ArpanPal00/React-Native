import React, { useState } from "react";
import { Stack } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { Text } from "react-native";

export default function RootLayout(){

    const AddtoCart = () => {
        console.warn("Added to the cart");
    }
    
    return(
        <>
        <Feather onPress={AddtoCart} name="shopping-cart" size={24} color="black" style={{position:'absolute',zIndex:100,top:15,left:370}}/>
        <Stack>
            <Stack.Screen name="index" options={{headerShown:true, title:'Nike'}}/>
            <Stack.Screen name="[id]" options={{headerShown:true,title:'Nike'}}/>
            <Stack.Screen name="Order" options={{headerShown:false}}/>
        </Stack>
        </>
    )
}