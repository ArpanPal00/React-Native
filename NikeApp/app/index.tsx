import React from "react";
import { SafeAreaView, Text, View, StyleSheet, StatusBar } from "react-native";
import ProductList from "./ProductList";
import ProductDetails from "./[id]";


export default function Home() {


    return(
        <>
        <StatusBar hidden={false} backgroundColor="transparent" animated={true} barStyle={'dark-content'}/>

        <View style={styles.container}>
            <ProductList />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        flex:1,
    }
})