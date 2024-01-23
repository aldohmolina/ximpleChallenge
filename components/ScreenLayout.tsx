import {ReactNode} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TitleSection} from './TitleSection';

interface Props {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const ScreenLayout = ({children, title, subtitle}: Props) => {
  return (
    <>
      <SafeAreaView style={{paddingHorizontal: 15, paddingVertical: 10}}>
        <TitleSection title={title} subtitle={subtitle} />
        <View style={{marginTop: 5}}>{children}</View>
      </SafeAreaView>
    </>
  );
};
