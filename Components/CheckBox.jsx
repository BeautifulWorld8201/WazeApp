import { TouchableOpacity, StyleSheet, View, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons'

import GlobalStyle from '../global/styles'
import Colors from '../global/colors'

const CheckBox = ({
    checked,
    onChange,
    buttonStyle = {},
    activeButtonStyle = {},
    inactiveButtonStyle = {},
    activeIconProps = {},
    inactiveIconProps = {},
    title
  }) => {
    const iconProps = checked ? activeIconProps : inactiveIconProps
    return (
      <View style={Styles.checkboxContainer}>
        <TouchableOpacity
          style={[
            buttonStyle,
            checked
              ? activeButtonStyle
              : inactiveButtonStyle,
          ]}
          onPress={() => onChange(!checked)}>
          {checked && (
            <Ionicons
              name="checkmark"
              size={20}
              color="white"
            />
          )}
        </TouchableOpacity>
        <Text style={[GlobalStyle.h7, GlobalStyle.menuLabel]}>{title}</Text>
      </View>
    )
}

const Styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10
  },
})

export default CheckBox