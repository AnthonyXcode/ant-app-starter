import { AlertButton, AlertOptions, AlertStatic } from 'react-native'
import { FC } from 'react'
import { forwardRef } from 'react'


const RNAlert: AlertStatic = ({
    alert: (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => {
        console.log(title)
    },

    prompt: () => {

    }
})

export default RNAlert

export const Alert: FC = forwardRef(() => {
    return <></>
})