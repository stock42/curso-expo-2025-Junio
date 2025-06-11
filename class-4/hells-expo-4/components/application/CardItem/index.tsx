
import { ImageBackground, View } from 'react-native'
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';
import { Text } from '@/components/share/Text'
import { Block } from '@/components/share/Block'

import backgroundFile from '@/assets/images/background.webp'

import { Character } from '@/api-client/characters';

type Props = Character

const blurhash =
  'LEHLk~WB2yk8pyo0adR*.7kCMdnj';



export function CardItem({ name, image, ki, maxKi }: Props) {
  console.info('render item: ', name)
    return (
    <ImageBackground
        source={backgroundFile}
        style={{
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: 'gold',
          
        }}
     >
      <Block
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 220,
        }}
      >
        <View>
          <View
            style={{
              width: 180,
              height: 180,
              position: 'absolute',
              top: -20,
              left: -30,
              borderRadius: 90,
              backgroundColor: '#fcc203cc',
            }}
          />
          <View
            style={{
              width: 90,
              height: 90,
              position: 'absolute',
              top: -20,
              right: -30,
              borderRadius: 90,
              backgroundColor: '#0000FFDD',
            }}
          />
          <Image
            source={{
              uri: image,
            }}
            placeholder={{ blurhash }}
            contentFit='contain'
            transition={250}
            style={{
              width: 160,
              height: '100%',
              alignSelf: 'center',
              marginLeft: 10,
            }}
          />
          <BlurView
            intensity={60}
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: '#00000099',
              paddingHorizontal: 6,
              paddingVertical: 3,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}
          >
            <Text
              variant='h2'
              style={{
                textAlign: 'center',
                width: '100%',
                color: 'gold'
              }}
            >
              {name}
            </Text>
          </BlurView>
        </View>
        <View>
          <Text>{`${ki} / ${maxKi}`}</Text>
        </View>
      </Block>
      </ImageBackground>
    )
}