import { Dimensions, StatusBar, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import Colors from './colors'
const {width, height} = Dimensions.get('window')
const zoom = Platform.OS === 'android' ? 1 : 1
StatusBar.setBarStyle('dark-content', true)

export default {
    SCREEN_WIDTH: width * zoom,
    SCREEN_HEIGHT: height * zoom,
    STATUS_BAR_HEIGHT: getStatusBarHeight(),
    
    fullscreen: {
        position: 'absolute', 
        bottom: '0%', 
        left: '0%', 
        width: width * zoom, 
        height: height * zoom,
    },
    flex: (direction, xOption, yOption) => {
        if(direction.indexOf('row') >= 0) {
            return {
                flexDirection: 'row',
                justifyContent: xOption,
                alignItems: yOption
            }
        } else if(direction.indexOf('column') >= 0) {
            return {
                flexDirection: 'column',
                justifyContent: yOption,
                alignItems: xOption
            }
        }
    },

    margin: (top, right, bottom, left) => {
        return {
            marginTop: top * zoom,
            marginRight: right * zoom,
            marginBottom: bottom * zoom,
            marginLeft: left * zoom,
        }
    },

    padding: (top, right, bottom, left) => {
        return {
            paddingTop: top * zoom,
            paddingRight: right * zoom,
            paddingBottom: bottom * zoom,
            paddingLeft: left * zoom,
        }
    },
    width: (percent) => {
        return {
            width: `${percent}%`
        }
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: getStatusBarHeight() + 20
    },
    h2:{
        fontFamily: 'Poppins_700Bold',
        fontSize: width / 12,
    },
    h3:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: width / 16,
    },
    h4:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: width / 19,
    },
    h5:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: width / 22,
    },
    h6:{
        fontFamily: 'Poppins_500Medium',
        fontSize: width / 25,
    },
    h7:{
        fontFamily: 'Poppins_500Medium',
        fontSize: width / 28,
    },
    h8:{
        fontFamily: 'Poppins_500Medium',
        fontSize: width / 30,
    },
    h9: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
    },
    underline: {
        textDecorationLine: 'underline'
    },
    greenLabel: {
        color: Colors.green
    },
    grayLabel: {
        color: Colors.gray
    },
    grayScaleLable: {
        color: Colors.text1
    },
    menuLabel: {
        color: Colors.text
    },
    dark2Label: {
        color: Colors.dark2
    },
    lightLabel: {
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    },

    hidden: {
        display: 'none'
    },
    borderStyle: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.border,
        borderRadius: 100,
        backgroundColor: Colors.disableBg
    },

    BoxShadow: {
        //iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        //Android
        elevation: 24,
    },

    textAlign: (x) => {
        return {
            textAlign: x
        }
    }
}