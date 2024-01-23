import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  name: string;
  value: number;
  select: boolean;
}

export const CreditButton = ({name, value, select, ...props}: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: select ? '#007aff' : 'rgba(0, 122, 255,0.5)',
        padding: 10,
        borderRadius: 5,
        marginVertical: 6,
      }}>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value)}
        {/* <NumericFormat
            value={value}
            decimalSeparator="."
            prefix="$"
            displayType="text"
          /> */}
      </Text>
    </TouchableOpacity>
  );
};
