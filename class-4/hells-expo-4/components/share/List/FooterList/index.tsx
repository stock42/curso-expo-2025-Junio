import { View } from 'react-native';

export function FooterList() {
    return (
         <View
          style={{
            marginTop: 20,
            height: 50,
          }}
        >
          <View
            style={{
              backgroundColor: 'gold',
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 10,
              position: 'absolute',
              bottom: -50,
              borderRadius: 90,
            }}
          />
        </View>
    )
}