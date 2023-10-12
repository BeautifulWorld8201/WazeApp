import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Button from '../../Components/Button'

import Pollice from '../../assets/police.png'
import Crash from '../../assets/crash.png'
import Road from '../../assets/road.png'
import Traffic from '../../assets/traffic.png'

import GlobalStyle from '../../global/styles'
import Colors from '../../global/colors'

const ReportScreen = ({navigation}) => {

    const onClose = () => {
        navigation.pop()
    }

    const onOpenDetail = (type) => {
        navigation.push('Home', { screen: 'ReportDetail', params: { type: type } })
    }

    return (
        <View style={[Styles.container]}>
            <View style={[GlobalStyle.flex('row', 'flex-start', 'center')]}>
                <TouchableOpacity onPress={onClose}>
                    <View style={[Styles.backButton]}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={[Styles.itemContainer]}>
                <TouchableOpacity onPress={() => onOpenDetail('police')}>
                    <Image source={Pollice} style={[Styles.icon]} />
                    <Text style={[GlobalStyle.margin(10,0,0,0), GlobalStyle.h3, GlobalStyle.textAlign('center')]}>POLICE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onOpenDetail('crash')}>
                    <Image source={Crash} style={[Styles.icon]} />
                    <Text style={[GlobalStyle.margin(10,0,0,0), GlobalStyle.h3, GlobalStyle.textAlign('center')]}>CRASH</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onOpenDetail('road')}>
                    <Image source={Road} style={[Styles.icon]} />
                    <Text style={[GlobalStyle.margin(10,0,0,0), GlobalStyle.h3, GlobalStyle.textAlign('center')]}>BAD ROAD</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onOpenDetail('traffic')}>
                    <Image source={Traffic} style={[Styles.icon]} />
                    <Text style={[GlobalStyle.margin(10,0,0,0), GlobalStyle.h3, GlobalStyle.textAlign('center')]}>TRAFFIC</Text>
                </TouchableOpacity>
            </View>

            <Button onPress={onClose} text='Close' textColor='white' Style={[Styles.button]} bgColor={Colors.mainColor} Icon={null} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: GlobalStyle.STATUS_BAR_HEIGHT,
        padding: 20
    },
    backButton: {
        marginTop: 20,
        borderRadius: 5,
        padding: 10,
        borderColor: Colors.dark2,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    button: {
        position: 'absolute',
        bottom: 20,
        marginLeft: 20
    },
    icon: {
        width: GlobalStyle.SCREEN_WIDTH * 0.35,
        height: GlobalStyle.SCREEN_WIDTH * 0.35,
        resizeMode: 'contain',
        marginTop: 20
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 30
    }
})

export default ReportScreen