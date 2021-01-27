import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Touchable } from 'react-native';
import RenderProducts from '../components/RenderProducts';

export default function Home() {
  return (
    <ScrollView>
            {/* Home Header */}
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white", marginTop: 20, marginBottom: 20}}>
                <View style={{ flexDirection: 'row', marginTop: 40 , marginBottom: 10}}>
                    <TouchableOpacity   style={{ flex: 1,}} 
                                        onPress={() => console.log("menu bar")} >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Image 
                            style={{
                                width: 30, 
                                height: 30, 
                                marginRight: 50
                            }}
                            source={require('../assets/icons/back_arrow_icon.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1,}}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Text style={{  marginLeft: 0, fontSize: 18,fontFamily: 'GothamMedium', color: "black"}}>Price Checker</Text> */}
                        </View>
                    </View>
                    <TouchableOpacity style={{ flex: 1,}}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Image 
                            style={{
                                width: 30, 
                                height: 30,
                                marginLeft: 50 
                            }}
                            source={require('../assets/icons/menu.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* End */}

            <View style={{flexDirection: "row"}}>
            <View style={{marginLeft: 40, marginTop: 20}}>
                <Text style={{fontSize: 27,fontFamily: 'GothamBold' , color: "#1D256E"}}>Your</Text>
                <Text style={{
                    fontSize: 27,
                    fontFamily: 'GothamBold', 
                    color: "#1D256E",
                    marginTop: 5,
                }}>Trakings</Text>
                <View style={{padding: 1, marginVertical: 10, marginRight: -40 , backgroundColor: "#FF7F2D"}} />
                <Text style={{fontSize: 15,fontFamily: 'GothamMedium', color: "#6A738A"}}>32 products</Text>
            </View>
            <TouchableOpacity style={{flex:1}}> 
                <Image 
                    style={{
                        width: 75, 
                        height: 75, 
                        borderRadius: 12,
                        alignSelf: "flex-end",
                        marginRight: 40,
                        marginTop: 15
                    }}
                    source={require('../assets/images/profile.jpeg')} />
        </TouchableOpacity>
        </View>

        {/* Add Product component */}
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 35, paddingBottom: 15}}>
                <View style={{ flexDirection: 'row', height: 45, backgroundColor: "#E4E6F3", borderRadius: 8 }}>
                    {/* Claim */}
                    <View
                        style={{ 
                            flex: 1,
                            backgroundColor: null , 
                            marginLeft: 12,
                            borderRadius: 6,
                        }}
                        
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{  marginLeft: 0, fontSize: 16,fontFamily: 'GothamMedium', lineHeight: 22, color: "#1D256E"}}>Add Product</Text>
                        </View>
                    </View>


                    {/* Get Point */}
                    <View
                        style={{ 
                            flex: 1,
                            backgroundColor: null , 
                            margin: 5,
                            borderRadius: 8,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />
                    </View>

                    {/* Divider */}

                    {/* My Card */}
                    <View
                        style={{ 
                            flex: 1,
                            backgroundColor: null, 
                            margin: 5,
                            borderRadius: 8,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: -75
                            }}
                        >
                        <Image 
                            style={{
                                width: 20, 
                                height: 20, 
                            }}
                            tintColor= "#1D256E"
                            source={require('../assets/icons/right-arrow.png')} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
            <RenderProducts />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
