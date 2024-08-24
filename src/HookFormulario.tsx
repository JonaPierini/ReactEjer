import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { useHookFormulario } from './useHookFormulario'

export const HookFormulario = () => {


    const { formHook,
        setFormHook } = useHookFormulario()

    const Onenviar = () => {
        console.log(formHook)
    }

    return (
        <View>
            <Text>Formulario HOOK</Text>
            <TextInput
                onChangeText={(nombre) => setFormHook({ ...formHook, nombre })}
                value={formHook.nombre}
                placeholder={'Ingrese su nombre'}
            />
            <TextInput
                onChangeText={(email) => setFormHook({ ...formHook, email })}
                value={formHook.email}
                placeholder={'Ingrese su Email'}
            />
            <Button title='Enviar' onPress={Onenviar}></Button>
        </View>
    )
}
