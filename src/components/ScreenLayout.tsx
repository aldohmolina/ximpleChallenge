import {ReactNode} from 'react';
import {Text, View} from 'react-native';
import {TitleSection} from './TitleSection';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const ScreenLayout = ({children, title, subtitle}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingLeft: insets.left + 20,
        paddingTop: insets.top + 15,
        paddingRight: insets.right + 20,
        paddingBottom: insets.bottom + 15,
      }}>
      <TitleSection title={title} subtitle={subtitle} />
      <View style={{marginTop: 5}}>{children}</View>
    </View>
  );
};
