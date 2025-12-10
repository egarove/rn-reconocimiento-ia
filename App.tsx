import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';


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
    </View>
    );
  }

  function toggleCameraFacing() {
    setFacing (current => (current == 'back' ? 'front' : 'back'));
  }

  return(
    <View>
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
