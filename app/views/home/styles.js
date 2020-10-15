import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    backgroundRadius: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        borderTopRightRadius: Dimensions.get('window').width * 0.8,
        zIndex: 0
    },
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.08,
        paddingHorizontal: 10,
    },
    ph:{
        paddingHorizontal: 15,
    },
    title: {
       fontSize: 20,
       fontWeight: 'bold' ,
       paddingBottom: 10,
    },
    bannerWrapper: {
        width: Dimensions.get('window').width,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    bannerCard: {
        height: 170,
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: Dimensions.get('window').width * 0.12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    bannerInfoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: Dimensions.get('window').width * 0.75,
    },
    bannerInfoText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bannerImg: {
        height: 120,
        width: Dimensions.get('window').width * 0.75,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    shoeCard: {
        height: 180,
        width: Dimensions.get('window').width * 0.37,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },  
    shoesWrapper: {
        marginTop: 50,
        paddingVertical: 10,
        height: 200
    },
    SheoImage: {
        height: 140,
        width: Dimensions.get('window').width * 0.37,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    buttonAdd: {
        backgroundColor: '#84878c',
        height: 40,
        width: Dimensions.get('window').width * 0.37,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    addWrapper: {
        height: 25,
        width: 25,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: 'center'
    },
    addText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -3
    },
    sheaName: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 10,
        marginTop: -5
    },
    notifWrapper: {
        height: 20,
        width:20,
        borderRadius: 20,
        backgroundColor: 'rgba(240, 27, 12, 0.6)',
        position: 'absolute',
        top: 3,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notifText: {
        color: '#fff',
    },
    cartWrapper: {
        height: '100%',
        justifyContent: 'center'
    },
    cartIcn: {
        marginRight: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    dotActive: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginHorizontal: 8,
        backgroundColor: '#000',

    },
    dotInActive: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginHorizontal: 8,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderWidth: 2,
    },
    paginWrapper: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
