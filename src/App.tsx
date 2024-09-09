
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { AllProduct } from './AllProduct';
import { PageProduct } from './PageProduct';
import { Counter } from './Counter';
import { Formulario } from './Formulario';
import { HookFormulario } from './HookFormulario';
import { AddList } from './AddList';
import { AddListNoObjeto } from './AddListNoObjeto';
import { CountUndef } from './CountUndef';




//para poner el dispositivo ios => xcrun simctl list devices => el que sale con booted es.
//lo copias y lo pegas como esta en el package.json => npm run start-ios

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CountUndef></CountUndef>
    </SafeAreaView>

  )
}



export default App;
