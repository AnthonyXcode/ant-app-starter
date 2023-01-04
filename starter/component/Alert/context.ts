import * as React from 'react'
import {
    Alert,
    AlertButton,
    AlertOptions,
    AlertType
    } from 'react-native'


const context = React.createContext<Alert>({
    alert: (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => { },
    prompt: (
        title: string,
        message?: string,
        callbackOrButtons?: ((text: string) => void) | AlertButton[],
        type?: AlertType,
        defaultValue?: string,
        keyboardType?: string,
    ) => { },
})

export function useAlert() {
    return React.useContext(context)
}

const { Provider, Consumer } = context

export { Provider, Consumer }
