import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from'react-native'

import GlobalStyle from '../global/styles'
import Colors from '../global/colors'

const SplashScreen = ({navigation}) => {

    const onGoHome = () => {
        navigation.replace('Home')
    }

    return (
        <View style={[Styles.container]}>
            <View style={[Styles.lightImg]}>
                <Image source={require('../assets/bg.png')} style={[Styles.light]} />
            </View>
            <View style={[GlobalStyle.flex('column', 'center', 'center'), Styles.box]}>
                <Image source={require('../assets/logo.png')} style={[Styles.logo]} />
                <Text style={[GlobalStyle.h3, GlobalStyle.lightLabel]}>Your Destination</Text>
                <Text style={[GlobalStyle.h3, GlobalStyle.lightLabel]}>Your Language</Text>
                <Text style={[GlobalStyle.h3, GlobalStyle.lightLabel]}>Your Our Guidance</Text>

                <TouchableOpacity style={[GlobalStyle.margin(20,0,0,0)]} onPress={onGoHome}>
                    <ImageBackground source={require('../assets/button.png')} style={[Styles.button]}>
                        <Text style={[GlobalStyle.h4, GlobalStyle.dark2Label]}>Open application</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor,
        justifyContent: 'center',
        paddingTop: GlobalStyle.STATUS_BAR_HEIGHT
    },
    barStyle: {
        display: 'none'
    },
    light: {
        resizeMode: 'contain',
        transform: [
            { scale: 0.8 }
        ],
        width: GlobalStyle.SCREEN_WIDTH,
        height: GlobalStyle.SCREEN_HEIGHT,
    },
    lightImg: {
        position: 'absolute',
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: GlobalStyle.SCREEN_WIDTH,
        height: GlobalStyle.SCREEN_HEIGHT + GlobalStyle.STATUS_BAR_HEIGHT,
        // paddingTop: GlobalStyle.STATUS_BAR_HEIGHT
    },
    logo: {
        width: GlobalStyle.SCREEN_WIDTH,
        height: GlobalStyle.SCREEN_WIDTH / 1.6,
        resizeMode: 'cover'
    },
    button: {
        paddingHorizontal: 70,
        borderRadius: 40,
        paddingVertical: 10
    },
    box: {
        height: GlobalStyle.SCREEN_HEIGHT
    }
})

export default SplashScreen