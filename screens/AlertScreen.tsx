import {
    Alert,
    Button,
    size,
    Spacing
    } from '../starter/index'
import { StyleSheet, View } from 'react-native'

export const AlertScreen = () => {
    const onPressButtonAlert = () => {
        Alert.alert('title', 'message', [{ text: 'ok' }])
    }

    const onPressButtonsAlert = () => {
        Alert.alert('title', 'message', [{ text: 'yes' }, { text: 'no' }])
    }

    return <View style={styles.container}>
        <Button title='button alert' onPress={onPressButtonAlert} />
        <Spacing height={size[4]} />
        <Button title='two buttons alert' onPress={onPressButtonsAlert} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: size[4],
        flex: 1
    }
})