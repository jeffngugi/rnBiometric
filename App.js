import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import TouchID from 'react-native-touch-id';

const App = () => {

  const optionalConfigObject = {
    title: 'Unlock', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch the fingerprint sensor on your device', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: '', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
 
  const handleBiometric = ()=>{
    TouchID.isSupported(optionalConfigObject).then((biometryType) =>{
      if (biometryType === 'FaceID') {
        console.log('FaceID is supported.');
    } else {
        console.log('TouchID is supported.');
        TouchID.authenticate('', optionalConfigObject)
          .then((succes)=>{
          console.log(succes)
        })
        .catch(err=>{
          console.log('Err', err.details)
        })
    }
    }).catch(error =>{
      console.log(error.details)
    }
    )
  }
  



  return (
    <View>
      <Text>jshdsjdh</Text>
      <Button title="Open touch" onPress={handleBiometric}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
