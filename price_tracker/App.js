import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  const [height, setHeight] = useState("");

  return (
    <View style={styles.container}>
      <Text>Enter your height.</Text>
      <TextInput 
                style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#D1D1D1",
                    borderRadius: 5,
                    padding: 10,
                    paddingHorizontal: 50,
                    marginTop: 18,
                    marginBottom: 12,
                    fontFamily: 'GothamLight', 
                    fontSize: 14,
                    marginHorizontal: 15
                }} 
                value={height}
                onChangeText={text => setHeight(text)}
            />
      <TouchableOpacity style={{
            backgroundColor: "#F1F2F3",  
            paddingVertical: 10, 
            paddingHorizontal: 20,
            borderRadius: 10 
        }}
            onPress={() => Alert.alert(`Your height is ${height}`)}
        >
            <Text>OK</Text>
            
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
