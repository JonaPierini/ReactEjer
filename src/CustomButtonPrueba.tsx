import React, { Dispatch, SetStateAction } from 'react'
import { Pressable, Text, } from 'react-native'

interface Props {
    counter: number,
    setCounter: Dispatch<SetStateAction<number>>
    label: string
}

export const CustomButtonPrueba = (props: Props) => {


    const onIncrementHijo = () => {
        props.setCounter(props.counter + 10)
    }

    return (
        <Pressable style={{ backgroundColor: 'blue', padding: 10 }} onPress={onIncrementHijo}>
            <Text style={{ color: 'white' }}>{props.label}</Text>
        </Pressable>
    )
}
