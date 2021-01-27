import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function RenderProducts() {
  return (
    <View>
      <TouchableOpacity 
        style={{
            backgroundColor: "#ECECEC",
            borderRadius: 8,
            paddingVertical: 7,
            paddingHorizontal: 7,
            marginHorizontal: 35,
            marginVertical: 10
        }}> 
        <View style={{backgroundColor: "#F5F6FC", borderRadius: 8, flexDirection: "row"}}>
            <Image source={{uri: "https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"}}
                style={{ 
                    width: 150, 
                    height: 150, 
                    resizeMode: "stretch",
                    borderRadius: 25,
                }}
            />
            <View> 
                <Text style={{
                    fontFamily: 'GothamLight', 
                    marginLeft: 10,
                    marginRight: 150,
                    lineHeight: 15,
                    marginTop: 10,
                }}>New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)</Text>
                <View style={{padding: 1, marginVertical: 10, marginRight: 160, marginLeft: 10 , backgroundColor: "#E4E6F3"}} />
                <Text style={{
                    fontSize: 12,
                    fontFamily: 'GothamMedium', 
                    marginLeft: 10,
                    marginRight: 150,
                }}>Current price: 200</Text>

                <View style={{flexDirection: "row"}}>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'GothamMedium', 
                        marginLeft: 10,
                        marginTop: 10
                    }}>Avaibility status: </Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'GothamMedium',
                        marginTop: 10,
                        color: "red"
                    }}>Costly</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{
            backgroundColor: "#ECECEC",
            borderRadius: 8,
            paddingVertical: 7,
            paddingHorizontal: 7,
            marginHorizontal: 35,
            marginVertical: 10
        }}> 
        <View style={{backgroundColor: "#F5F6FC", borderRadius: 8, flexDirection: "row"}}>
            <Image source={{uri: "https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg"}}
                style={{ 
                    width: 150, 
                    height: 150, 
                    resizeMode: "stretch",
                    borderRadius: 25,
                }}
            />
            <View> 
                <Text style={{
                    fontFamily: 'GothamLight', 
                    marginLeft: 10,
                    marginRight: 150,
                    lineHeight: 15,
                    marginTop: 10,
                }}>OnePlus Bullets Wireless Z Bass Edition (Reverb Red)</Text>
                <View style={{padding: 1, marginVertical: 10, marginRight: 160, marginLeft: 10 , backgroundColor: "#E4E6F3"}} />
                <Text style={{
                    fontSize: 12,
                    fontFamily: 'GothamMedium', 
                    marginLeft: 10,
                    marginRight: 150,
                }}>Current price: 200</Text>

                <View style={{flexDirection: "row"}}>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'GothamMedium', 
                        marginLeft: 10,
                        marginTop: 10
                    }}>Avaibility status: </Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'GothamMedium',
                        marginTop: 10,
                        color: "green"
                    }}>Notified</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{
            backgroundColor: "#ECECEC",
            borderRadius: 8,
            paddingVertical: 7,
            paddingHorizontal: 7,
            marginHorizontal: 35,
            marginVertical: 10
        }}> 
        <View style={{backgroundColor: "#F5F6FC", borderRadius: 8, flexDirection: "row"}}>
            <Image source={{uri: "https://images-na.ssl-images-amazon.com/images/I/71U1tOMFfdL._SL1000_.jpg"}}
                style={{ 
                    width: 150, 
                    height: 150, 
                    resizeMode: "stretch",
                    borderRadius: 25,
                }}
            />
            <View> 
                <Text style={{
                    fontFamily: 'GothamLight', 
                    marginLeft: 10,
                    marginRight: 150,
                    lineHeight: 15,
                    marginTop: 10,
                }}>Nike Brasilia 24 Liters Midnight Navy/Black/White Casual Backpack</Text>
                <View style={{padding: 1, marginVertical: 10, marginRight: 160, marginLeft: 10 , backgroundColor: "#E4E6F3"}} />
                <Text style={{
                    fontSize: 12,
                    fontFamily: 'GothamMedium', 
                    marginLeft: 10,
                    marginRight: 150,
                }}>Current price: 200</Text>

                <View style={{flexDirection: "row"}}>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'GothamMedium', 
                        marginLeft: 10,
                        marginTop: 10
                    }}>Avaibility status: </Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'GothamMedium',
                        marginTop: 10,
                        color: "green"
                    }}>Notified</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
      
    </View>
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
