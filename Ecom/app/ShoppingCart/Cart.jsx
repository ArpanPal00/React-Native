import { View,Text, Image,Pressable, FlatList } from "react-native";
import products from '@/assets/products.json';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useCart } from "../Provider/ContextProvider";

export default function CartScreen() {
    const {items,updateQuantity,removeItem} = useCart();
    return(
        <View style={{flex:1}}>
            
        <FlatList
        data={items}
        renderItem={({item})=>(
            <View style={{backgroundColor:'white',paddingHorizontal:10,marginVertical:10,paddingTop:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Image source={{uri:item.product.image}} resizeMode="contain" style={{width:'30%',aspectRatio:1}}/>
                <View style={{padding:10,marginVertical:10}}>
                    <Text style={{fontSize:15,fontWeight:'400',marginBottom:10}}>{item.product.name}</Text>
                    <Text style={{fontSize:25,fontWeight:'600',marginBottom:10}}>${item.product.price}</Text>
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'30%',alignSelf:'center',marginBottom:10}}>
                    <Pressable onPress={()=>{updateQuantity(item.product_id,1)}}><AntDesign style={{fontWeight:'600'}} name="plus" size={24} color="black" /></Pressable>
                    <Text style={{fontSize:18,fontWeight:'600'}}> {item.quantity}</Text>
                    <Pressable onPress={()=>{updateQuantity(item.product_id,-1)}}><AntDesign style={{fontWeight:'600'}} name="minus" size={24} color="black" /></Pressable>
                </View>
                <Pressable onPress={()=>{removeItem(item.product_id)}} style={{backgroundColor:'black',width:'100%',alignSelf:'center',padding:10}}><Text style={{color:'white',fontSize:15,fontWeight:'500',textAlign:'center'}}>Remove <AntDesign name="delete" size={24} color="white" /></Text></Pressable>
            </View>
        )}
        />
        <View style={{marginVertical:10,padding:10}}>
            <Text style={{fontSize:20,fontWeight:'600',textAlign:'center'}}>Total: ${items.reduce((total,item)=>total+item.product.price*item.quantity,0)}</Text>
        </View>
        <Pressable style={{backgroundColor:'black',width:'90%',alignSelf:'center',padding:10,borderRadius:30,marginBottom:10}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'600',textAlign:'center'}}>Place Order</Text>
        </Pressable>
        </View>
    )
}