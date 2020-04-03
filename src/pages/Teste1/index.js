import React, { useEffect } from 'react'
import { Text, Platform, ToastAndroid, Alert } from 'react-native'

import GlobalStyles from '../../global.css'
import Styles from './styles'

export default function Teste1 (props) {

    const hello = msg => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        }else{
            Alert.alert(msg)
        }
    }

    useEffect(() => {
        hello('Olá, Seja bem vindo!')
    }, [])

    return(
        <Text style={GlobalStyles.default}>Teste01</Text>
    )
}