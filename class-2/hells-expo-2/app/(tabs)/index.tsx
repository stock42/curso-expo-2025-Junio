import { useState, useEffect } from 'react'
import { Text } from '@/components/share/Text'
import { Screen  } from '@/components/share/Screen'
import { Block } from '@/components/share/Block'

import { CardItem } from '@/components/application/CardItem'
import { getCharacters, Character } from '@/api-client/characters'

export default function HomeScreen() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading ] = useState(false)

  async function fetchCharacters() {
    try {
      setLoading(true)
      const response = await getCharacters()
      setCharacters(response.items)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <Screen>
      {characters.map((char) => (
        <CardItem key={char.id} {...char} />
      ))}
     
      <Block
        style={{
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


