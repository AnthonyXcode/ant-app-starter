import React, { forwardRef, useRef } from 'react'
import { Alert as CustomAlert } from './components'
import {
    AlertButton,
    AlertOptions,
    AlertStatic,
    AlertType
    } from 'react-native'
import { Provider } from './context'


interface IAlertProvider {
    children: React.ReactNode
}

export interface AlertProviderRef extends AlertStatic {
    getContext: () => AlertStatic
}

export const AlertProvider = forwardRef<AlertProviderRef, IAlertProvider>(({ children }, ref) => {
    const alertRef = useRef<AlertStatic>(null)

    const context = React.useMemo(
        () => ({
            alert: (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => {
                alertRef.current && alertRef.current?.alert(title, message, buttons, options)
            },
            prompt: (
                title: string,
                message?: string,
                callbackOrButtons?: ((text: string) => void) | AlertButton[],
                type?: AlertType,
                defaultValue?: string,
                keyboardType?: string,
            ) => {
                alertRef.current && alertRef.current?.prompt(title, message, callbackOrButtons, type, defaultValue, keyboardType)
            },
        }),
        [alertRef]
    )

    React.useImperativeHandle(
        ref,
        () => ({
            getContext: () => context,
            alert: context.alert,
            prompt: context.prompt,
        }),
        [context]
    )

    return (
        <Provider value={context}>
            <CustomAlert ref={alertRef}>
                {React.Children.only(children)}
            </CustomAlert>
        </Provider>
    )
})
