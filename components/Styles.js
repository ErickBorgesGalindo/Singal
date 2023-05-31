import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // Text Styles
    header: {
        fontSize: 50,
        fontWeight: 800,
        color: '#F0F2EF',
    },

    subHeader: {
        fontSize: 18,
        fontWeight: 300,
        color: '#F0F2EF'
    },

    text: {
        fontSize: 18,
        fontWeight: 500,
        color: '#F0F2EF'
    },

    textColor: {
        fontSize: 17,
        fontWeight: 300,
        color: '#FF206E'
    },
    
    description: {
        textAlign: 'justify',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 17,
        color: '#fff',
    },

    sectionName: {
        marginTop: 30,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
        textTransform:'uppercase'
    },

    // background styles
    mainBackground: {
        flex: 1,
        backgroundColor: '#0C0F0A'
    },

    imageBackground: {
        width: 400,
        height: 300,
    },

    ViewContainer: {
        position: 'absolute',
        top: '93%',
        width: 390,
        height: 600,
        borderRadius: 25,
        backgroundColor: '#1C1C1E',
    },

})