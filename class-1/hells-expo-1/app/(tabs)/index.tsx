import { Text } from '@/components/share/Text'
import { Screen  } from '@/components/share/Screen'
import { Block } from '@/components/share/Block'


export default function HomeScreen() {
  return (
    <Screen>
      <Block style={{
        marginTop: 100,
        flex: 1,
        alignItems: 'center'
      }}>
        <Text variant='h1'>Hola mundo</Text>
      </Block>
      <Block variant='circle' style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderWidth: 1,
      }}>
        <Text variant='h5' color='#ffffff'>12</Text>
      </Block>
    </Screen>
  )
}


