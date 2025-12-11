import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';
import { useState } from 'react';
import { useCameraDevice } from 'react-native-vision-camera';


export default function App() {

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, setPermission] = useCameraPermissions();

  if (!permission) {
    return( 
    <View>
      //Los permisos se estan procesando
    </View>
    );
  }

  if (!permission.granted) {
    return(
    <View>
      <Text>Necesitamos acceso a la camara para poder comprobar su mano.</Text>
      <Button title='Permisos' onPress={setPermission}></Button>
    </View>
    );
  }

  function toggleCameraFacing() {
    setFacing (current => (current == 'back' ? 'front' : 'back'));
  }

  return(
    <View style= {{flex: 1}}>
      <CameraView facing={facing} style={{flex: 1}}>
        <TouchableOpacity onPress={toggleCameraFacing} style={{backgroundColor: 'white',  height: 100, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{justifyContent: 'center', alignItems: 'center'}}>Invertir Camara</Text>
        </TouchableOpacity>
      </CameraView>
    </View>
  )
}
