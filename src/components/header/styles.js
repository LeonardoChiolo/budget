import { StyleSheet, StatusBar } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        paddingStart: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,


    },
    title: {
        color: COLORS.white,
        fontSize: 30,
        fontFamily:'Jost-Bold',
    },
});
