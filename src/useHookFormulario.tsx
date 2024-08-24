import React, { useState } from 'react'

export const useHookFormulario = () => {


    const [formHook, setFormHook] = useState({
        nombre: '',
        email: '',
        telefono: '',
        otroDato: ''
    })

    return {
        formHook,
        setFormHook
    }
}
