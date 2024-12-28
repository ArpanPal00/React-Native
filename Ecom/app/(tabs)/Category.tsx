import { Link } from "expo-router";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Category() {
    const column1 = ['SmartPhones' , 'Tv' , 'Fridge' , 'Laptops' , 'Desktops']
    const column2 = ['Shirts' , 'Pants' , 'Shoes' , 'Watches' , 'Consoles']
    return(
        <View>
            <ImageBackground resizeMode='cover' style={{width:'100%',height:'100%'}} source={{uri:'https://i.pinimg.com/236x/e1/39/6b/e1396b3fa0aba3f6dec7d961f102003e.jpg'}}/>
            <View style={{position:'absolute'}}>
            <Text style={{fontSize:50,fontWeight:"600",textAlign:'center',color:'white'}}>Categories </Text>

        <View style={{width:'100%',flexDirection:'row',margin:10}}>
            <View>
                {column1.map((item)=>(
                    <Pressable key={item} style={{height:100,flex:1,backgroundColor:'transparent',borderRadius:10,margin:5,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'white'}}>
                        <Text style={{fontWeight:'600',fontSize:30,textAlign:'center',color:"white"}}>{item}</Text>
                    </Pressable>
                    
                ))}
            </View>
            <View>
            {column2.map((item)=>(
                    <Pressable key={item} style={{height:100,width:'100%',backgroundColor:'transparent',borderRadius:10,margin:5,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'white'}}>
                    <Text style={{fontWeight:'600',fontSize:30,textAlign:'center',color:"white"}}>{item}</Text>
                </Pressable>
                ))}
            </View>
            </View>
            </View>
            <Link href={'/Categories/Explore'} asChild>
            <Pressable style={{padding:10,borderRadius:5,borderWidth:2,borderColor:"white",position:'absolute',bottom:20,left:150}}><Text style={{fontWeight:'500',fontSize:20,color:'white'}}>Explore <AntDesign name="arrowright" size={24} color="white" style={{fontWeight:'600'}}/></Text></Pressable>
            </Link>
        </View>
    )
}