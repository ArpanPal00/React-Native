import Products from "@/components/Products";
import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from "expo-router";
import Order from "./Order";


export default function Cart() {
    const [count , setCount] = useState(1)
    const increase = () => {
        setCount(c => c+1)
    }
    const decrease = () => {
        setCount(c => c-1)
    }
    const p1 = Products[0];
    const p2 = Products[1];
    const p3 = Products[2];
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{width:"100%",height:100,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,backgroundColor:'#D6D2D2',marginBottom:10}}>
                <Image style={{width:'30%',aspectRatio:1}} source={{uri: p1.image}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'500'}}>{p1.name}</Text>
                    <Text style={{fontWeight:'500'}}>${p1.price}</Text>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{fontWeight:'500',fontSize:15,marginBottom:10}}>Quantity</Text>
                    <View style={{flexDirection:'row',gap:10}}>
                        <AntDesign onPress={increase} name="pluscircleo" size={28} color="black" />
                        <AntDesign onPress={decrease} name="minuscircleo" size={28} color="black" />
                    </View>
                    <Text style={{fontWeight:'600',fontSize:15,textAlign:'center'}}>{count}</Text>
                </View>
            </View>

            <View style={{width:"100%",height:100,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,backgroundColor:'#D6D2D2',marginBottom:10}}>
                <Image style={{width:'30%',aspectRatio:1}} source={{uri: p2.image}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'500'}}>{p2.name}</Text>
                    <Text style={{fontWeight:'500'}}>${p2.price}</Text>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{fontWeight:'500',fontSize:15,marginBottom:10}}>Quantity</Text>
                    <View style={{flexDirection:'row',gap:10}}>
                        <AntDesign onPress={increase} name="pluscircleo" size={28} color="black" />
                        <AntDesign onPress={decrease} name="minuscircleo" size={28} color="black" />
                    </View>
                    <Text style={{fontWeight:'600',fontSize:15,textAlign:'center'}}>{count}</Text>
                </View>
            </View>

            <View style={{width:"100%",height:100,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,backgroundColor:'#D6D2D2'}}>
                <Image style={{width:'30%',aspectRatio:1}} source={{uri: p3.image}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'500'}}>{p3.name}</Text>
                    <Text style={{fontWeight:'500'}}>${p3.price}</Text>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{fontWeight:'500',fontSize:15,marginBottom:10}}>Quantity</Text>
                    <View style={{flexDirection:'row',gap:10}}>
                        <AntDesign onPress={increase} name="pluscircleo" size={28} color="black" />
                        <AntDesign onPress={decrease} name="minuscircleo" size={28} color="black" />
                    </View>
                    <Text style={{fontWeight:'600',fontSize:15,textAlign:'center'}}>{count}</Text>
                </View>
            </View>

            <View style={{position:'absolute',bottom:0,borderTopWidth:1,borderColor:'gray',padding:20,width:'100%',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:20,fontWeight:'500'}}>Total = ${p1.price+p2.price+p3.price}</Text>
            <Link href={'/Order'} asChild>
            <TouchableOpacity style={{width:'50%',alignSelf:'center',borderRadius:10,backgroundColor:'black',padding:15,}}>
                <Text style={{fontWeight:'600',fontSize:20,color:'white',textAlign:'center'}}>Place Order</Text>
            </TouchableOpacity>
            </Link>
            </View>
        </SafeAreaView>
    )
}