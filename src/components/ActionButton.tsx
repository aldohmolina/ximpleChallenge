import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  active?: boolean;
  isLoading?: boolean;
}

export const ActionButton = ({
  title,
  active = true,
  isLoading = false,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `rgba(0, 122, 255,${active ? 1 : 0.5})`,
        padding: 15,
        borderRadius: 5,
        marginVertical: 35,
      }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{color: '#FFFFFF', fontSize: 18}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
