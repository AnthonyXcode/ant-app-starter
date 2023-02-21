import React, { forwardRef, Ref } from 'react'
import { useImperativeHandle } from 'react'
import {
    AlertButton,
    AlertOptions,
    AlertStatic,
    AlertType,
    Alert as RNAlert,
} from 'react-native'


export const Alert = forwardRef((props: { children: React.ReactNode }, ref: Ref<AlertStatic>) => {
    useImperativeHandle(ref, () => ({ alert, prompt }))

    const alert = (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => {
        RNAlert.alert(title, message, buttons, options)
    }

    const prompt = (title: string,
        message?: string,
        callbackOrButtons?: ((text: string) => void) | AlertButton[],
        type?: AlertType,
        defaultValue?: string,
        keyboardType?: string,) => {
        RNAlert.prompt(title, message, callbackOrButtons, type, defaultValue, keyboardType)
    }

    return <>
        {props.children}
    </>
})