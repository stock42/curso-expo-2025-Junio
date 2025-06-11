import { useState, useEffect, useCallback, useRef  } from 'react'
import { FlatList, TextInput } from 'react-native'

import { Screen  } from '@/components/share/Screen'
import { Text } from '@/components/share/Text'
import { getCharacters, Character } from '@/api-client/characters'
import { FloatButton } from '@/components/share/FloatButton'
import { FooterList } from '@/components/share/List/FooterList'
import { ListOptions } from '@/components/share/ListOptions'
import { ListSeparator } from '@/components/share/List/ListSeparator'
import { ListCharactersForRace } from '@/components/share/ListCharactersForRace'

export default function HomeScreen() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading ] = useState(false)
  const refList = useRef<FlatList>(null)
  const [races, setRaces] = useState<string[]>([])
  const [query, setQuery] = useState('')

  useCallback(async () => {
    await fetchCharacters()
  }, [])

  async function fetchCharacters() {
    try {
      setLoading(true)
      const response = await getCharacters()
      const races: { [key: string]: { race: string, characters: Character[] } } = {}
      for (let x=0; x< response.items.length; x++) {
        if (!races[response.items[x].race]) {
          races[response.items[x].race] = {
            race: response.items[x].race,
            characters: []
          }
        }
        races[response.items[x].race].characters.push(response.items[x])
      }
      const keys = Object.keys(races)
      setRaces(keys)
      setCharacters(keys.map((key) => races[key])) 
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  console.info('characters: ', characters)
  return (
    <Screen scroll={false}>
      <TextInput
        placeholder='Buscar...'
        value={query}
        onChangeText={(text) => {
          setQuery(text)
        }}
        style={{
          borderWidth: 0.5,
          borderColor: 'red',
          borderRadius: 12,
          paddingHorizontal: 12,
          paddingVertical: 6,
        }}
        keyboardType='default'
        inputMode='search'
      />
     <ListOptions
        options={races}
        onPress={(value, index) => refList?.current?.scrollToIndex({ index, animated: true })}
      />

      <FlatList
        data={characters}
        renderItem={({ item }) => <ListCharactersForRace {...item} />}
        keyExtractor={(item) => item.race}
        initialNumToRender={6}
        refreshing={loading}
        onRefresh={fetchCharacters}
        ListEmptyComponent={() => (<Text>No hay personajes</Text>)}
        ItemSeparatorComponent={() => (<ListSeparator />)}
        ref={refList}

        ListFooterComponent={() => (<FooterList />)}
      />
      <FloatButton onPress={() => refList?.current?.scrollToOffset({ offset: 0, animated: true })} />
    </Screen>
  )
}


