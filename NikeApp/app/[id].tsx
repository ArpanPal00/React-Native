import React from "react";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View, StatusBar } from "react-native";
import Products from "@/components/Products";
import { Link, useLocalSearchParams } from "expo-router";


export default function ProductDetails() {
    const {id} = useLocalSearchParams()
    const product = Products[0]
    const { width } = useWindowDimensions()
    const Product = Products.find((p) => p.id.toString() === id);
    return(
        <>
        <StatusBar hidden={false} backgroundColor="transparent" animated={true} barStyle={'dark-content'}/>
        <View>
            <ScrollView>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled data={Product?.images} renderItem={({item}) => (
                    <Image style={{width,aspectRatio:1}} source={{uri: item}}/>
            )} />
            <View style={{padding:10}}>
                    <Text style={styles.name}>{Product?.name}</Text>
                    <Text style={styles.price}>${Product?.price}</Text>

                    <Text style={styles.description}>{Product?.description}</Text>
            </View>

            </ScrollView>

            <Link href={"/Cart"} asChild>
            <Pressable style={{width:'90%',backgroundColor:'black',justifyContent:'center',alignItems:'center',position:'absolute',bottom:10,padding:15,alignSelf:'center',borderRadius:50}}>
                <Text style={{fontWeight:'500',fontSize:15,color:'white'}}>Add To Cart</Text>
            </Pressable>
            </Link>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    name:{
        fontSize:20,
        fontWeight:'600',
        marginVertical:5
    },
    price:{
        fontWeight:'600',
        marginVertical:5
    },
    description:{
        fontWeight:'500'
    }
})