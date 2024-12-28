import { FlatList, Image, View,StyleSheet,Text, Pressable } from "react-native";
import products from '@/assets/products.json'
import { Link } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Stack } from "expo-router";
import { useCart } from "../Provider/ContextProvider";

export default function HomeScreen() {
    const { items } = useCart();
    return(
        <View style={{backgroundColor:'white'}}>
            <Stack.Screen options={{headerShown:true,headerTitle:'Home',headerRight:()=>(
                <Link href={'/ShoppingCart/Cart'} asChild>
                    <Pressable style={{flexDirection:'column',alignItems:'center'}}>
                     {items.length > 0 && (
                        <Text style={{fontSize:15,fontWeight:'600',color:'red'}}>{items.length}</Text>
                     )}
                    <FontAwesome5 style={{marginRight:10}} name="shopping-cart" size={24} color="black" />
                    
                    </Pressable>
                </Link>
            )}}/>
        <FlatList data={products} numColumns={2} renderItem={({item})=>(
            <Link href={`../ProductDetails/${item.id}`} asChild>
            <Pressable style={styles.container}>
            <Image source={{uri:item.image}} resizeMode="contain" style={styles.image}/>
            <View style={styles.textarea}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </Pressable>
        </Link>
        )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    image:{
        width:'100%',
        aspectRatio:1
    },
    textarea:{
        padding:5
    },
    name:{
        fontWeight:"600"
    },
    price:{
        fontWeight:'600'
    },
})