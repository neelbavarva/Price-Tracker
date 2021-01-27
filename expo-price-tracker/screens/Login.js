import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View , Text, StyleSheet, Image, TouchableOpacity, ScrollView, LogBox, TextInput, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Login() {

    return (

        <View style={styles.container}>
            <View style={{ marginTop: 190, marginBottom: 30 }}>
                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <Image style={{width:67, height:67, marginTop: 35}} source={require('../assets/images/logo1.jpeg')} />
                    <Text style={{fontFamily:'GothamBoldItalic', fontSize: 35}}>inance</Text>
                </View>
                <Text style={{
                    fontFamily:'GothamBoldItalic', 
                    fontSize: 30, 
                    textAlign: "center", 
                    marginLeft: 50,
                    marginTop: -37
                }}>Tracker</Text>
            </View>
            <View style={styles.SectionStyle}>
                <Feather style={{marginLeft: 10}} name="user" size={24} color="black" />
                <TextInput
                    style={{flex:1, marginLeft: 10, fontFamily: 'GothamMedium'}}
                    placeholder="Username"
                />
            </View>
            <View style={styles.SectionStyle}>
                <MaterialCommunityIcons style={{marginLeft: 10}} name="onepassword" size={24} color="black" />
                <TextInput
                    secureTextEntry={true}
                    style={{flex:1, marginLeft: 10, fontFamily: 'GothamMedium'}}
                    placeholder="Password"
                />
            </View>

            <TouchableOpacity 
                style={{
                    margin: 10, 
                    backgroundColor: "#67D5D9", 
                    borderRadius: 5,
                    marginVertical: 8,
                    marginHorizontal: 20,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                }}>
                <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Sign In</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', marginTop: 10,justifyContent: 'center'}}>
                <Text style={{fontFamily: 'GothamMedium', fontSize: 12}}>Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={{color: "dodgerblue", fontFamily: 'GothamMedium', fontSize: 12}}> Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
                            
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -300,
        backgroundColor: "white",
        justifyContent: 'center',
      },
      
      SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 50,
        borderRadius: 6 ,
        marginVertical: 8,
        marginHorizontal: 20,
    },
     
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
});


