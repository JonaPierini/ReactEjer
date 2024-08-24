import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export const AddList = () => {

    const data = [
        {
            id: 1,
            nombre: 'Producto Uno',
            descripcion: 'Descripcion producto uno'
        },
        {
            id: 2,
            nombre: 'Producto Dos',
            descripcion: 'Descripcion producto uno'
        },
        {
            id: 3,
            nombre: 'Producto tres',
            descripcion: 'Descripcion producto uno'
        }
    ]

    const [list, setList] = useState(data)

    const [inputChange, setInputChange] = useState({
        id: new Date().getTime(),
        nombre: '',
        descripcion: ''
    })

    const handleSubmit = () => {
        if (inputChange.descripcion.length === 0 || inputChange.nombre.length === 0) return
        console.log(inputChange)
        setList([...list, inputChange])
        setInputChange({
            id: '' as any,
            nombre: '',
            descripcion: ''
        })
    }


    return (
        <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text>AddList</Text>
            {
                list.map((elem) => (
                    <Text key={elem.id}>{elem.nombre}</Text>
                ))
            }
            <TextInput
                placeholder='Ingresar un Nuevo producto'
                value={inputChange.nombre}
                onChangeText={(nombre) => setInputChange({ ...inputChange, nombre })} />
            <TextInput
                placeholder='Ingresar Descripcion'
                value={inputChange.descripcion}
                onChangeText={(descripcion) => setInputChange({ ...inputChange, descripcion })} />
            <Button title='Enviar' onPress={handleSubmit}></Button>
        </View>
    )
}
