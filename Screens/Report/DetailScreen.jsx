import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {useState, useEffect} from 'react'

import Button from '../../Components/Button'

import Police from '../../assets/police.png'
import Crash from '../../assets/crash.png'
import Road from '../../assets/road.png'
import Traffic from '../../assets/traffic.png'

import GlobalStyle from '../../global/styles'
import Colors from '../../global/colors'

const DetailScreen = ({navigation, route}) => {
    const { type } = route.params
    const data = {
        police: {
            image: Police,
            bigTitle: 'POLICE',
            smallTitle1: 'ON THE ROAD',
            smallTitle2: 'CHECK POINT'
        },
        traffic: {
            image: Traffic,
            bigTitle: 'TRAFFIC',
            smallTitle1: 'SERIOUS TRAFFIC',
            smallTitle2: 'MINOR TRAFFIC'
        },
        road: {
            image: Road,
            bigTitle: 'BAD ROAD',
            smallTitle1: 'SERIOUS DAMAGE',
            smallTitle2: 'MINOR DAMAGE'
        },
        crash: {
            image: Crash,
            bigTitle: 'CRASH',
            smallTitle1: 'SERIOUS CRASH',
            smallTitle2: 'MINOR CRASH'
        }
    }
    const [value, setValue] = useState(true)

    const onSubmit = () => {
        navigation.push('Home', { screen: 'ReportCheckOut', params: {type: data[type].bigTitle} })
    }

    return (
        <View style={[Styles.container]}>
            <View style={[GlobalStyle.flex('row', 'flex-start', 'center')]}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <View style={[Styles.backButton]}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={[GlobalStyle.flex('row', 'center', 'center')]}>
                <View>
                    <Image source={data[type].image} style={[Styles.icon]} />
                    <Text style={[GlobalStyle.margin(10,0,0,0), GlobalStyle.h3, GlobalStyle.textAlign('center')]}>{data[type].bigTitle}</Text>
                </View>
            </View>

            <View style={[Styles.itemContainer]}>
                <View style={[GlobalStyle.flex('column', 'center', 'center')]}>
                    <Image source={data[type].image} style={[Styles.smallIcon]} />
                    <TouchableOpacity onPress={() => setValue(e => !e)} style={[GlobalStyle.flex('row', 'flex-start', 'center'), GlobalStyle.margin(10,0,0,0)]}>
                        <View style={[Styles.radio, GlobalStyle.flex('row', 'center', 'center')]}>
                            { value && (<View style={[Styles.active]}></View>)}
                        </View>
                    </TouchableOpacity>
                    <Text style={[GlobalStyle.margin(10,0,0,0), GlobalStyle.h6, GlobalStyle.textAlign('center')]}>{data[type].smallTitle1}</Text>
                </View>

                <View style={[GlobalStyle.flex('column', 'center', 'center')]}>
                    <Image source={data[type].image} style={[Styles.smallIcon]} />
                    <TouchableOpacity onPress={() => setValue(e => !e)} style={[GlobalStyle.flex('row', 'flex-start', 'center'), GlobalStyle.margin(10,0,0,0)]}>
                        <View style={[Styles.radio, GlobalStyle.flex('row', 'center', 'center')]}>
                            { !value && (<View style={[Styles.active]}></View>)}
                        </View>
                    </TouchableOpacity>
                    <Text style={[GlobalStyle.margin(10,0,0,0), GlobalStyle.h6, GlobalStyle.textAlign('center')]}>{data[type].smallTitle2}</Text>
                </View>
            </View>

            <Button onPress={onSubmit} text='Submit' textColor='white' Style={[Styles.button]} bgColor={Colors.mainColor} Icon={null} />
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
    },
    smallIcon: {
        width: GlobalStyle.SCREEN_WIDTH * 0.2,
        height: GlobalStyle.SCREEN_WIDTH * 0.2,
        resizeMode: 'contain',
    },
    active: {
        width: 15,
        height: 15,
        borderRadius: 100,
        backgroundColor: Colors.mainColor
    },
    radio: {
        width: 25,
        height: 25,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.mainColor,
    }
})

export default DetailScreen