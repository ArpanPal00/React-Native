import React from "react";
import { FlatList, Image, SafeAreaView, Text, View, Dimensions, Pressable, StatusBar } from "react-native";
import cars from "@/components/cars"


export default function Home(){
    return(
        <SafeAreaView style={{flex:1,height:'100%',width:"100%"}}>

        <StatusBar
                animated={true}
                backgroundColor="#000000" 
                barStyle="light-content" 
                hidden={false} 
        />
            
        <FlatList data={cars} 
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            renderItem={({item}) => <View>


                <View style={{flexDirection:'row',width:"100%",padding:10,position:'absolute',justifyContent:"space-between",alignItems:'center',top:-30}}><Image style={{height:100,width:100,zIndex:100}} resizeMode="contain" source={require('@/assets/images/logo.png')}/><Image style={{height:30,width:30,zIndex:100}} resizeMode="contain" source={require('@/assets/images/menu.png')}/></View>

                <View style={{position:'absolute',zIndex:100,width:'100%',top:100}}>
                    <Text style={{textAlign:'center',fontSize:40,fontWeight:'600'}}>{item.name}</Text>
                    <Text style={{textAlign:'center',fontSize:15}}>{item.tagline}{' '}<Text>{item.taglineCTA}</Text></Text>
                </View>

                <View style={{position:'absolute',zIndex:100,width:'100%',top:650,justifyContent:'center',alignItems:'center'}}>
                    <Pressable style={{width:'90%',backgroundColor:'#2F2D2D',justifyContent:'center',alignItems:'center',borderRadius:50,padding:10}}><Text style={{fontWeight:'600',color:'white'}}>CUSTOM ORDER</Text></Pressable>
                    <Pressable style={{width:'90%',backgroundColor:'#DBD0D2',justifyContent:'center',alignItems:'center',borderRadius:50,padding:10,marginTop:20}}><Text style={{fontWeight:'600'}}>EXISTING INVENTORY</Text></Pressable>


                </View>


            <Image style={{height:806,width:412}} source={item.image}/>



        </View>}/>
        </SafeAreaView>
    )
} 