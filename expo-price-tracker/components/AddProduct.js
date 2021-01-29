import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Touchable, Picker, TextInput } from 'react-native';

export default function AddProduct() {

    const [url, setUrl] = useState("");
    const [site, setSite] = useState("");
    const [price, setPrice] = useState(null);

  return (
    <View style={styles.container} >
                <Text style={{
                    textAlign: "center", 
                    color:"black", 
                    fontFamily:"GothamBold", 
                    fontSize: 17, 
                    paddingBottom: 10,
                }}>Add Product</Text>

                <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 60, marginBottom: 20}} />
                    <Text >URL</Text>
                    <TextInput 
                        style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "red",
                        borderRadius: 5,
                        padding: 10,
                        marginTop: 8,
                        marginBottom: 12,
                        fontFamily: 'GothamLight', 
                        fontSize: 14,
                    }}
                        placeholder="Enter name here.." 
            
                />

                  <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 60, marginBottom: 20}} />
                      <Text >Site</Text>
                      <TextInput 
                          style={{
                          backgroundColor: "white",
                          borderWidth: 1,
                          borderColor: "red",
                          borderRadius: 5,
                          padding: 10,
                          marginTop: 8,
                          marginBottom: 12,
                          fontFamily: 'GothamLight', 
                          fontSize: 14,
                      }}
                          placeholder="Enter name here.." 
            
                  />

                  <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 60, marginBottom: 20}} />
                      <Text >Price</Text>
                      <TextInput 
                          style={{
                          backgroundColor: "white",
                          borderWidth: 1,
                          borderColor: "red",
                          borderRadius: 5,
                          padding: 10,
                          marginTop: 8,
                          marginBottom: 12,
                          fontFamily: 'GothamLight', 
                          fontSize: 14,
                      }}
                          placeholder="Enter name here.." 
            
                  />
                
                <TouchableOpacity 
                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20}}
                  
                >
                    <View style={styles.button}>
                        <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Add Product</Text>
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

  Text : {
    fontSize: 14,
    color: "black",
    marginLeft: 2,
    paddingTop: 8,
    fontFamily: 'GothamMedium',
    },

    inputField : {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#D1D1D1",
        borderRadius: 5,
        padding: 10,
        marginTop: 8,
        marginBottom: 12,
        fontFamily: 'GothamLight', 
        fontSize: 14,
    },

    button : {
        backgroundColor: "#222222",
        padding: 12,
        borderRadius: 6,
    }

});