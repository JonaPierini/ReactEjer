import React, { useEffect, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export const AddListNoObjeto = () => {

    const data = [
        {
            id: 1,
            nombre: 'Producto Uno',

        },
        {
            id: 2,
            nombre: 'Producto Dos',

        },
        {
            id: 3,
            nombre: 'Producto tres',

        }
    ]


    const [list, setList] = useState(data)

    const [inputChange, setInputChange] = useState('')

    const handleSubmit = () => {
        let nuevoProducto = {
            id: new Date().getTime(),
            nombre: inputChange
        }
        setList([
            ...list,
            nuevoProducto
        ])
        setInputChange('')

    }

    useEffect(() => {
        console.log(list)
    }, [list])


    return (
        <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text>AddListNoObjeto</Text>
            {
                list.map((elem) => (
                    <Text key={elem.id}>{elem.nombre}</Text>
                ))
            }
            <TextInput
                value={inputChange}
                onChangeText={(inputChange) => setInputChange(inputChange)}
                placeholder='Ingresar un Nuevo producto'
            />
            <Button title='Enviar' onPress={handleSubmit} />
        </View>
    )
}
