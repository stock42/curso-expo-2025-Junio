import { useState, useEffect, useCallback, useRef  } from 'react'
import { FlatList, View, TouchableOpacity } from 'react-native'
import { Screen  } from '@/components/share/Screen'
import { Text } from '@/components/share/Text'
import { CardItem } from '@/components/application/CardItem'
import { getCharacters, Character } from '@/api-client/characters'


export default function HomeScreen() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading ] = useState(false)
  const refList = useRef<FlatList>(null)

  useCallback(async () => {
    await fetchCharacters()
  }, [])

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
    <Screen scroll={false}>
      <FlatList
          data={characters}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#ccc',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                marginVertical: 10,
                marginHorizontal: 10,

              }}
              onPress={() => {
                refList?.current?.scrollToIndex({ index, animated: true })
              }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={6}
        />
      <FlatList
        data={characters}
        renderItem={({ item }) => <CardItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={6}
        refreshing={loading}
        onRefresh={fetchCharacters}
        ListEmptyComponent={() => (<Text>No hay personajes</Text>)}
        ItemSeparatorComponent={() => (
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
      )}
      ref={refList}

      ListFooterComponent={() => (
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
      )}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 50,
          right: 50,
          backgroundColor: 'blue',
          borderRadius: 90,
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          refList?.current?.scrollToOffset({ offset: 0, animated: true })
          // refList?.current?.scrollToEnd({ animated: true })
          // refList?.current?.scrollToIndex({ index: 20, animated: true })
        }}
      >
        <Text color='white'>UP</Text>
      </TouchableOpacity>
    </Screen>
  )
}


