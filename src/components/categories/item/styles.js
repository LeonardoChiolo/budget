import { StyleSheet } from "react-native";

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 15,
        
    },
    imageBackground:{
        width: '100%',
        height: 380,
        justifyContent: 'flex-end', 
        
    },
    categoryName : {
        
        fontSize: 50,
        fontFamily:'Jost-Bold',
        color: COLORS.white,
        padding: 20,
        textShadowOffset:{ width: -2, height: 2},
        textShadowColor: 'rgba(0, 0, 0, 0.60)',
        textShadowRadius: 7,
    },

});
