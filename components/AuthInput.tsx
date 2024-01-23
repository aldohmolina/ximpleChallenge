import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

interface Props extends TextInputProps {
  labelText?: string;
}

export const AuthInput = ({labelText, ...props}: Props) => {
  return (
    <View style={{marginVertical: 5}}>
      <View style={{marginVertical: 5}}>
        <Text style={{fontSize: 16}}>{labelText}</Text>
      </View>
      <TextInput
        {...props}
        style={{borderWidth: 1, borderRadius: 5, borderColor: '#AAA'}}
      />
    </View>
  );
};
