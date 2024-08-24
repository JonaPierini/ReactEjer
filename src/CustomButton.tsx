import React from 'react'
import { Pressable, Text } from 'react-native'

interface Props {
    label: String,
    setCounter: () => void
}

export const CustomButton = (props: Props) => {
    console.log(props)


    return (
        <Pressable onPress={props.setCounter} style={{ backgroundColor: 'blue', padding: 10 }}>
            <Text style={{ color: 'white' }}>{props.label}</Text>
        </Pressable>
    )
}
