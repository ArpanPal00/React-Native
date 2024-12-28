import { Stack, useLocalSearchParams } from "expo-router"
import products from '@/assets/products.json'
import { Image, Pressable, Text, View } from "react-native";
import { useCart } from '@/app/Provider/ContextProvider';


export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams();
    const product = products.find((p) => p.id.toString() === id);
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