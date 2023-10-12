import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native'
import GlobalStyle from '../global/styles'
import Colors from '../global/colors'

const InputField = ({onClick, onRef, styleIcon, defaultValue = '', value, onSubmitEditing, showSoftInputOnFocus = true, multiline, placeholder, lock, icon, onChange, onIconClick}) => {

    return (
        <View  style={[ GlobalStyle.width(100), GlobalStyle.borderStyle, GlobalStyle.padding(10, 15, 10, 20), GlobalStyle.margin(10, 0, 0, 0), GlobalStyle.flex('row', 'space-between', 'end'), multiline && {borderRadius: 20}]}>
            {styleIcon}
            <TextInput onFocus={() => onClick && onClick()} ref={(input) => onRef && onRef(input)} returnKeyType="next" onSubmitEditing={() => onSubmitEditing && onSubmitEditing()} defaultValue={defaultValue} value={value} showSoftInputOnFocus={showSoftInputOnFocus} multiline={multiline} secureTextEntry={lock} onChangeText={(e) => onChange(e)} style={[GlobalStyle.width(100), GlobalStyle.h6, multiline && {height: 150, textAlignVertical: 'top'}]} placeholder={placeholder}/>
            <TouchableOpacity onPress={onIconClick} style={{paddingTop: 2}}>
                { icon }
            </TouchableOpacity>
        </View>
    )
}

export default InputField