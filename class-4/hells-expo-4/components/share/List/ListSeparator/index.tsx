import { View } from 'react-native';

export function ListSeparator() {
  return (
    <View
        style={{
            height: 20,
            width: 20,
            borderRadius: 90,
            backgroundColor: 'gold',
            alignSelf: 'center',
            marginVertical: 10,
        }}
    />
  );
}
