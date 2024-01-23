import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const ActionButton = ({title, ...props}: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007aff',
        padding: 15,
        borderRadius: 5,
        marginVertical: 35,
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};
