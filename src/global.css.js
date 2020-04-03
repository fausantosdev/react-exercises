import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    default: {
        paddingTop: Platform.OS === 'android' ? 20 : 0
    }
})