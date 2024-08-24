import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { CustomButton } from './CustomButton'
import { CustomButtonPrueba } from './CustomButtonPrueba'

export const Counter = () => {


    const [counter, setCounter] = useState(1)

    const onIncremet = () => {
        setCounter(counter + 1)
    }

    const onDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{ fontSize: 20 }}>Counter: {counter}</Text>

            <CustomButton label={'Incrementar'} setCounter={onIncremet} />

            <CustomButton label={'Decrementar'} setCounter={onDecrement} />



            <CustomButtonPrueba counter={counter} setCounter={setCounter} label={"Hijo"}>

            </CustomButtonPrueba>

        </View>
    )
}
