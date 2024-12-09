import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Products from '@/components/Products'
import { Link } from "expo-router";

export default function ProductList(){
    return(
        <>
        <FlatList data={Products} renderItem={({item}) => (
            <Link href={`./${item.id}`} asChild>
            <Pressable style={{width:'50%',margin:5}}>
                <Image style={{width:'100%',aspectRatio:1,borderRadius:10}} source={{uri:item.image}}/>
                <View style={styles.textcontainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </Pressable>
            </Link>
        )} numColumns={2}/>
        </>
    )
}
const styles = StyleSheet.create({
    textcontainer:{
        width:'50%',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:70,
        padding:5
    },
    name:{
        fontWeight:'600'
    },
    price:{
        fontWeight:'600'
    }

})