import {ReactNode} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

interface Props {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

export const ScreenContainer = ({children, title, subtitle}: Props) => {
  return (
    <>
      <SafeAreaView style={{padding: 10}}>
        <View style={{marginTop: 10}}>
          <Text id="title">{title}</Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text id="subtitle">{subtitle}</Text>
        </View>
        <View style={{marginTop: 5}}>{children}</View>
      </SafeAreaView>
    </>
  );
};
