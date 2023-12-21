import React from "react";
import {View, Text, Image, SafeAreaView} from 'react-native';
import style from './card_style';
import product from './products.json';


const Card = ({product}) => {
    if(product.inStock){
        return(

            <View style={style.card_container}>

                <Image style={style.card_image} source={{uri:product.imageUrl}} />

                <Text style={style.card_title}> {product.title} </Text>

                <Text style={style.card_description}> {product.price} </Text>
                 
            </View>
        );
    }

    else{
        return(

            <View style={style.card_container}>

                <Image style={style.card_image} source={{uri:product.imageUrl}} />

                <Text style={style.card_title}> {product.title} </Text>

                <Text style={style.card_description}> {product.price} </Text>

                <Text style={style.card_noStock}> STOKTA YOK </Text>
                 
            </View>
        );
    }
}

     

export default Card;