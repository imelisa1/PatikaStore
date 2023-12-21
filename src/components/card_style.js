import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({

    card_container:{
        padding: 15,
        margin: 10,
        flex: 0.5,
        borderWidth:1,
        borderRadius: 10,
        backgroundColor: '#B6BBC4',
        height: Dimensions.get("window").height/2,
        width: Dimensions.get("window").width/2,
        
    },

    card_image:{
        height: 200,
        width: 150,
        borderRadius: 5,
    },

    card_title:{
        fontWeight: '900',
        fontSize: 24,
        color: 'black',
    },

    card_description:{
        color: '#525252', 
        fontSize: 18,
        fontWeight: '800',
        margin: 5,
        textAlign: 'left',
    },

    card_noStock: {
        color: 'red',
        fontSize: 12,
        fontWeight: '800',
    },
})

