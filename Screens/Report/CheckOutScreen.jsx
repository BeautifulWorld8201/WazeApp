import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'

import Button from '../../Components/Button'

import GlobalStyle from '../../global/styles'
import Colors from '../../global/colors'

const CheckOutScreen = ({navigation, route}) => {
    const { type } = route.params

    const onSubmit = () => {
        navigation.replace('Home')
    }

    return (
        <View style={[Styles.container]}>
            <View style={[GlobalStyle.flex('row', 'flex-start', 'center'), GlobalStyle.margin(20,0,20,0), GlobalStyle.width(100)]}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <View style={[Styles.backButton]}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <Text style={[GlobalStyle.h4, GlobalStyle.dark2Label, GlobalStyle.margin(0,0,0,30)]}>{type} REPORT</Text>
            </View>

            <View style={[Styles.roundButton, {marginTop: '30%'}]}>
                <Feather name="check" size={48} color="white" />
            </View>
            <Text style={[GlobalStyle.h3, GlobalStyle.dark2Label, GlobalStyle.margin(10,0,0,0)]}>Request Recieved!</Text>
            <Text style={[GlobalStyle.h7, GlobalStyle.grayLabel]}>We're working on it</Text>

            <Button onPress={onSubmit} text='Done' textColor='white' Style={[Styles.button]} bgColor={Colors.mainColor} Icon={null} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: GlobalStyle.STATUS_BAR_HEIGHT,
        padding: 20,
        alignItems: 'center',
    },
    backButton: {
        borderRadius: 5,
        padding: 10,
        borderColor: Colors.dark2,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    roundButton: {
        borderRadius: 100,
        backgroundColor: '#246BFD',
        width: GlobalStyle.SCREEN_WIDTH / 4,
        height: GlobalStyle.SCREEN_WIDTH / 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        position: 'absolute',
        bottom: 20,
        marginLeft: 20
    },
})

export default CheckOutScreen