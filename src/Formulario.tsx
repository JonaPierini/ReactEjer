import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export const Formulario = () => {


    const [name, setName] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const Onenviar = () => {
        console.log(name)
    }

    return (
        <View>
            <Text>Formulario</Text>
            <TextInput
                onChangeText={(nombre) => setName({ ...name, nombre })}
                value={name.nombre}
                placeholder={'Ingrese su nombre'}
            />
            <TextInput
                onChangeText={(email) => setName({ ...name, email })}
                value={name.email}
                placeholder={'Ingrese su Email'}
            />
            <Button title='Enviar' onPress={Onenviar}></Button>
        </View>
    )
}
