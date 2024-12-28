import { FlatList, Image, View,StyleSheet,Text, Pressable, SafeAreaView } from "react-native";
import SmartPhones from '@/assets/SmartPhones.json'
import { Link, Stack } from "expo-router";


export default function CategoryDetailsScreen() {

    return(
        <SafeAreaView style={{backgroundColor:'white'}}>
            <Stack.Screen options={{headerShown:true, headerTitle:'Explore More'}}/>
        <FlatList data={SmartPhones} numColumns={2} renderItem={({item})=>(
            <Link href={`/Categories/${item.id}`} asChild>
            <Pressable style={styles.container}>
            <Image source={{uri:item.image}} resizeMode="contain" style={styles.image}/>
            <View style={styles.textarea}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </Pressable>
        </Link>
        )}/>
        </SafeAreaView>
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