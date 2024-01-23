import {Text, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  title: string;
  subtitle?: string;
}
export const TitleSection = ({title, subtitle, ...props}: Props) => {
  return (
    <View {...props}>
      <View style={{marginTop: 10}}>
        <Text
          id="title"
          style={{fontSize: 32, color: '#000', fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <View style={{marginTop: 5}}>
        <Text id="subtitle" style={{fontSize: 14, color: '#999'}}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};
