import {
    Button,
    size,
    Spacing,
    useAlert
    } from '../starter/index'
import { StyleSheet, View } from 'react-native'

export const AlertScreen = () => {
    const { alert, prompt } = useAlert()

    const onPressButtonAlert = () => {
        alert('title', 'message', [{ text: 'ok' }])
    }

    const onPressButtonsAlert = () => {
        alert('title', 'message', [{ text: 'yes' }, { text: 'no' }])
    }

    const onPressPromp = () => {
        prompt('title', 'message', [{
            text: 'ok', onPress: (value) => {
                console.log(`value: ${value}`)
            }
        }, {text: 'no', onPress: (value) => {
            console.log(`value: ${value}`)
        }}], 'secure-text')
    }

    return <View style={styles.container}>
        <Button title='button alert' onPress={onPressButtonAlert} />
        <Spacing height={size[4]} />
        <Button title='two buttons alert' onPress={onPressButtonsAlert} />
        <Spacing height={size[4]} />
        <Button title='prompt' onPress={onPressPromp} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: size[4],
        flex: 1
    }
})