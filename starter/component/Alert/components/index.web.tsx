import {
    AlertButton,
    AlertOptions,
    AlertStatic,
    AlertType,
    Modal,
    Pressable,
    StyleSheet,
    View
    } from 'react-native'
import { Button } from '../../Button'
import { colors } from '../../../themes/colors'
import {
    forwardRef,
    Ref,
    useImperativeHandle,
    useState
    } from 'react'
import { size } from '../../../themes/size'
import { Spacing } from '../../Spacing'
import { Text } from '../../Text'


interface IAlertParams {
    title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions
}

interface IPromptParams {
    title: string,
    message?: string,
    callbackOrButtons?: ((text: string) => void) | AlertButton[],
    type?: AlertType,
    defaultValue?: string,
    keyboardType?: string,
}


export const Alert = forwardRef((props: { children: React.ReactNode }, ref: Ref<AlertStatic>) => {
    const [alertParams, setAlertParams] = useState<IAlertParams | undefined>(undefined)
    const [promptParams, setPromptParams] = useState<IPromptParams | undefined>(undefined)

    useImperativeHandle(ref, () => ({ alert, prompt }))

    const alert = (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => {
        setAlertParams({ title, message, buttons, options })
    }

    const prompt = (title: string,
        message?: string,
        callbackOrButtons?: ((text: string) => void) | AlertButton[],
        type?: AlertType,
        defaultValue?: string,
        keyboardType?: string,) => {
        setPromptParams({ title, message, callbackOrButtons, type, defaultValue, keyboardType })
    }

    const dismiss = () => {
        setAlertParams(undefined)
        setPromptParams(undefined)
    }

    return <>
        <Modal animationType='fade' transparent visible={!!alertParams || !!promptParams}>
            <View style={styles.container} />
            <Pressable onPress={dismiss} style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', opacity: !!alertParams || !!promptParams ? 1 : 0 }}>
                    <View style={styles.contentContainer}>
                        <Text.H1>{alertParams?.title}</Text.H1>
                        <Spacing height={size[4]} />
                        <Text>{alertParams?.message}</Text>
                        <Spacing height={size[10]} />
                        <View>
                            {alertParams?.buttons?.map((b, index) =>
                                <>
                                    <Button title={b.text ?? ''} onPress={() => {
                                        b.onPress?.()
                                        dismiss()
                                    }} />
                                    {index !== (alertParams.buttons?.length || 100) - 1 && <Spacing height={size[4]} />}
                                </>
                            )}
                        </View>
                    </View>
                </View>
            </Pressable>
        </Modal>
        {props.children}
    </>
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        opacity: 0.5,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    contentContainer: {
        padding: size[8],
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderRadius: size[4],
        borderColor: colors.dark,
        borderWidth: 1,
        minWidth: '50%'
    }
})