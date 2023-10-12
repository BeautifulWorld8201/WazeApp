import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Whatsapp from '../assets/ic_whatsapp.png'
import Messanger from '../assets/ic_messanger.png'
import Instagram from '../assets/ic_instagram.png'
import CopyLink from '../assets/ic_copy_link.png'

import Button from '../Components/Button'
import InputField from '../Components/InputField'

import GlobalStyle from '../global/styles'
import Colors from '../global/colors'

const InviteFriendScreen = ({navigation}) => {

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
                <Text style={[GlobalStyle.h4, GlobalStyle.dark2Label, GlobalStyle.width(70), GlobalStyle.margin(0,0,0,30), GlobalStyle.textAlign('center')]}>Invite Friend</Text>
            </View>

            <Image source={require('../assets/bg_invite.png')} style={[Styles.icon]} />
            <Text style={[GlobalStyle.grayLabel, GlobalStyle.h6, GlobalStyle.margin(20,0,20,0), GlobalStyle.width(70), GlobalStyle.textAlign('center')]}>Invite your friend to help us test our app</Text>
            <View style={[GlobalStyle.width(100), GlobalStyle.flex('row', 'space-between', 'center')]}>
                <TouchableOpacity style={[GlobalStyle.flex('column', 'center', 'center')]}>
                    <View style={[Styles.imageButton]}>
                        <Image source={Whatsapp} style={[Styles.image]} />
                    </View>
                    <Text style={[GlobalStyle.h8, GlobalStyle.grayLabel]}>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[GlobalStyle.flex('column', 'center', 'center')]}>
                    <View style={[Styles.imageButton]}>
                        <Image source={Messanger} style={[Styles.image]} />
                    </View>
                    <Text style={[GlobalStyle.h8, GlobalStyle.grayLabel]}>Messanger</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[GlobalStyle.flex('column', 'center', 'center')]}>
                    <View style={[Styles.imageButton]}>
                        <Image source={Instagram} style={[Styles.image]} />
                    </View>
                    <Text style={[GlobalStyle.h8, GlobalStyle.grayLabel]}>Instagram</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[GlobalStyle.flex('column', 'center', 'center')]}>
                    <View style={[Styles.imageButton]}>
                        <Image source={CopyLink} style={[Styles.image]} />
                    </View>
                    <Text style={[GlobalStyle.h8, GlobalStyle.grayLabel]}>Copy Link</Text>
                </TouchableOpacity>
            </View>

            <Text style={[GlobalStyle.h7, GlobalStyle.dark2Label, GlobalStyle.width(100), GlobalStyle.textAlign('center')]}>Enter your friends number to download the app via text</Text>
            <InputField  placeholder='Your Name' onChange={() => {}} />
            <InputField  placeholder='Friends Phone Number' onChange={() => {}} />

            <Button onPress={onSubmit} text='INVITE' textColor='white' Style={[Styles.button]} bgColor={Colors.mainColor} Icon={null} />
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
        marginTop: 20
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
    },
    imageButton: {
        padding: 10,
        backgroundColor: '#FAFAFA',
        borderRadius: 100,
    }
})

export default InviteFriendScreen