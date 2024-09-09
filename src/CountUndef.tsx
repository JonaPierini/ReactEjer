import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export const CountUndef = () => {

    const [first, setfirst] = useState<undefined | number>(undefined)



    const handleAdd = () => {

        if (first !== undefined) {
            setfirst(first + 1)
        } else {
            setfirst((prev) => (prev = 0) + 1)
        }

    }



    return (
        <View>
            <Text>CountUndef {first}</Text>
            <Button title='Agregar' onPress={handleAdd}></Button>
        </View>
    )
}
