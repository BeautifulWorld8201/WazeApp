import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Button from '../Components/Button'
import InputField from '../Components/InputField'

import GlobalStyle from '../global/styles'
import Colors from '../global/colors'

const FeedbackScreen = ({navigation}) => {

    const onSubmit = () => {

    }

    return (
        <View style={[Styles.container, GlobalStyle.flex('column', 'center', 'flex-start')]}>
            <View style={[GlobalStyle.flex('row', 'flex-start', 'center'), GlobalStyle.margin(20,0,20,0), GlobalStyle.width(100)]}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <View style={[Styles.backButton]}>
                        <Ionicons name="chevron-back" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <Text style={[GlobalStyle.h4, GlobalStyle.dark2Label, GlobalStyle.width(70), GlobalStyle.margin(0,0,0,30), GlobalStyle.textAlign('center')]}>We Would Like To Hear From You</Text>
            </View>

            <Image source={require('../assets/bg_feedback.png')} style={[Styles.icon]} />

            <InputField  placeholder='Your Name' onChange={() => {}} />
            <InputField  placeholder='State, City' onChange={() => {}} />

            <InputField multiline={true}  placeholder={`In few words tell us how we can \n 1. improve the app. \n 2. tell us what you like about the app. \n 3. what you don't like?`} onChange={() => {}} />

            <Button onPress={onSubmit} text='SUBMIT' textColor='white' Style={[Styles.button]} bgColor={Colors.mainColor} Icon={null} />
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
    icon: {
        width: GlobalStyle.SCREEN_WIDTH,
        height: GlobalStyle.SCREEN_WIDTH / 2,
        resizeMode: 'contain'
    },
    button: {
        marginTop: 40
    },
})

export default FeedbackScreen