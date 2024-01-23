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
      <SafeAreaView style={{paddingHorizontal: 15, paddingVertical: 10}}>
        <View style={{marginTop: 10}}>
          <Text
            id="title"
            style={{fontSize: 32, color: '#000', fontWeight: 'bold'}}>
            {title}
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text id="subtitle" style={{fontSize: 18, color: '#999'}}>
            {subtitle}
          </Text>
        </View>
        <View style={{marginTop: 5}}>{children}</View>
      </SafeAreaView>
    </>
  );
};
