import { AlertButton, AlertOptions, AlertStatic } from 'react-native'

const Alert: AlertStatic = ({
    alert: (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => {
        console.log(title)
    },

    prompt: () => {

    }
})

export default Alert
