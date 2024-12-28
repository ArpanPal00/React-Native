import { useLocalSearchParams,Stack } from "expo-router";
import { View,Text,Pressable,Image } from "react-native";
import SmartPhones from '@/assets/SmartPhones.json';
import { useState } from "react";
import { useCart } from "@/app/Provider/ContextProvider";

export default function ExploreDetailsScreen() {
    const { details } = useLocalSearchParams();
    const product = SmartPhones.find((p) => p.id.toString() === details);
    const {addItem} = useCart();
    return(
        <View style={{backgroundColor:'white'}}>
            <Stack.Screen options={{headerShown:true,headerTitle:`${product?.name}`}}/>

                        <Image source={{uri: product?.image}} resizeMode="contain" style={{width:'100%',aspectRatio:1}}/>
                        <View style={{padding:10,marginTop:10}}>
                            <Text style={{fontWeight:'500',fontSize:30}}>{product?.name}</Text>
                            <Text style={{fontWeight:'500',fontSize:20,marginVertical:15}}>${product?.price}</Text>
                            <Text style={{fontSize:15}}>{product?.description}</Text>
                        </View>
                        <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,position:'absolute',bottom:-80}}>
                            <Pressable onPress={()=>{addItem(product)}} style={{width:'45%',backgroundColor:'black',padding:10,borderWidth:2}}><Text style={{color:'white',textAlign:'center'}}>Add to cart</Text></Pressable>
                            <Pressable style={{width:'45%',borderWidth:2,padding:10,borderColor:'#5A5B56'}}><Text style={{textAlign:'center'}}>Buy now</Text></Pressable>
                        </View>

        </View>
    )
}