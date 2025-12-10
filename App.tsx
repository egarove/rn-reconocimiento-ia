import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';
import { useState } from 'react';
import { useCameraDevice } from 'react-native-vision-camera';


export default function App() {

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, setPermission] = useCameraPermissions();
  const device = useCameraDevice ('back')

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
    </View>
    );
  }

  function toggleCameraFacing() {
    setFacing (current => (current == 'back' ? 'front' : 'back'));
  }

  return(
    <View>
      <Camera>
        device={device}
        isActive={true}
      </Camera>
      <TouchableOpacity onPress={toggleCameraFacing}>
        <Text>Invertir Camara</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
