import React from "react";
import { View, Text, FlatList, StyleSheet, TextInput, SafeAreaView } from "react-native";
import product from './components/products.json';
import Card from './components/card';
import { create } from "react-test-renderer";

function App(){
    function onChangeText(text: string): void {
        throw new Error("Function not implemented.");
    }

    return(

        <SafeAreaView style={style.container}>
            <View style={style.upper_container}>

                <Text style={style.title}> PATİKASTORE </Text>

                <TextInput

                    style={style.searchbar}   
                    placeholder="Search..."
                />
           </View> 

           <View style={style.bottom_container}>

                <FlatList

                data={product}
                renderItem={({item}) =>  <Card  product = {item} />}
                numColumns={2}
            
                />

            </View>

        </SafeAreaView>

        
    );
}

export default App;

const style = StyleSheet.create ({

    container:{
        flex:1,

    },

    title: {
        fontSize: 34,
        fontWeight:'bold',
        color: '#880099',
        marginTop: 15,
    },

    searchbar: {
        borderRadius: 10,
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        
    },

    bottom_container:{
        flex:4,
        backgroundColor: 'white',
        
        
    },

    upper_container:{
        flex: 1,
        margin: 6,
    }




})