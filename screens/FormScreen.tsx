import {
  colors,
  FormCheckbox,
  FormDate,
  FormImage,
  FormSelect,
  FormText,
  size,
  Spacing
  } from '@starter'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

export default function FormScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <FormText title='Label' onChangeText={() => { }} text={'Input'} />
          <Spacing height={size[4]} />
          <FormText title='Label' onChangeText={() => { }} />
          <Spacing height={size[4]} />
          <FormText title='Label' onChangeText={() => { }} error={'Error message'} />
          <Spacing height={size[4]} />
          <FormText title='Label' onChangeText={() => { }} editable={false} text={'Input'} />
          <Spacing height={size[4]} />
          <FormSelect
            options={[{ title: 'title', value: 'title' }]}
            onChangeOption={() => { }}
            title='Label'
            placeHolder='Select'
          />
          <Spacing height={size[4]} />
          <FormSelect
            options={[{ title: 'title', value: 'title' }]}
            onChangeOption={() => { }}
            title='Label'
            placeHolder='Select'
            text='Input'
          />
          <Spacing height={size[4]} />
          <FormSelect
            options={[{ title: 'title', value: 'title' }]}
            onChangeOption={() => { }}
            title='Label'
            placeHolder='Input'
            text='Input'
            editable={false}
          />
          <Spacing height={size[4]} />
          <FormDate title='Date' text='DD/MM/YYY' placeHolder='Pick a date' mode='date' setTime={() => { }} />
          <Spacing height={size[4]} />
          <FormDate title='Date' text='DD/MM/YYY' placeHolder='Pick a date' mode='time' setTime={() => { }} />
          <Spacing height={size[4]} />
          <FormDate
            title='Date'
            text='DD/MM/YYY'
            placeHolder='Pick a date'
            mode='time'
            setTime={() => { }}
            editable={false}
          />
          <Spacing height={size[4]} />
          <FormImage title='Label' placeHolder='Choose Image' onPickImage={() => { }} />
          <Spacing height={size[4]} />
          <FormCheckbox title='I want to receive updates via email.' set={() => { }} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: size[5],
    backgroundColor: colors.white,
  },
})
