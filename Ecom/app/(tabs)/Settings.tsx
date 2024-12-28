import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Settings() {
    const options = ['Orders','Lists' , 'Account' , 'Buy Again']
    return(
        <ScrollView style={{backgroundColor:'white',paddingTop:10}}>
            <View style={{width:'100%',alignItems:"center",marginBottom:20}}>
                <Image style={{width:"30%",aspectRatio:1}} source={{uri:'https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0'}}/>
                <Text style={{fontWeight:"600",fontSize:20,textAlign:'center',color:'#5A5B56'}}>username@useme123</Text>
            </View>
            <View>
                {options.map((item)=>(
                    <Pressable key={item} style={{borderRadius:30,borderWidth:2,borderColor:'#5A5B56',width:'80%',alignSelf:'center',marginVertical:5,padding:8}}>
                        <Text style={{textAlign:'center',fontWeight:'500',fontSize:15,color:'#5A5B56'}}>{item}</Text>
                    </Pressable>
                ))}
            </View>
            <View style={{padding:10,borderBottomWidth:8,borderColor:'#BDBDC2'}}>
                <Text style={{fontSize:25,fontWeight:'600'}}>Your Orders</Text>
                <Text style={{color:'#5A5B56',fontSize:18,marginVertical:10}}>Hi! You have no recent orders</Text>
                <Pressable style={{borderRadius:5,borderWidth:2,borderColor:'#BDBDC2',padding:10}}><Text style={{fontSize:20,textAlign:'center'}}>Return to the HomePage</Text></Pressable>
            </View>
            <View style={{padding:10,borderBottomWidth:8,borderColor:'#BDBDC2'}}>
                <Text style={{fontSize:25,fontWeight:'600'}}>Buy Again</Text>
                <Text style={{color:'#5A5B56',fontSize:18,marginVertical:10}}>See what others are recordering on Buy Again</Text>
                <Pressable style={{borderRadius:5,borderWidth:2,borderColor:'#BDBDC2',padding:10}}><Text style={{fontSize:20,textAlign:'center'}}>Visit Buy Again</Text></Pressable>
            </View>
        </ScrollView>
    )
}