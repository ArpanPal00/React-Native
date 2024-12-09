import React from "react";
import { Text, View, StatusBar } from "react-native";


export default function Order() {
    return(
        <>
        <StatusBar hidden={false} backgroundColor="#3285D9" animated={true} barStyle={'dark-content'}/>
        <View style={{flex:1,backgroundColor:'#3285D9',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:50,fontWeight:'bold',textAlign:'center'}}>Order Placed Successfully</Text>
        </View>
        </>
    )
}