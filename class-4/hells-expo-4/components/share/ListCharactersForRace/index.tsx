import { View, FlatList } from 'react-native';
import { Text } from '@/components/share/Text';
import { Character } from '@/api-client/characters';
import { CardItem } from '@/components/application/CardItem';

type ListCharactersForRaceProps = {
    characters: Character[];
    race: string;
}

export function ListCharactersForRace({ race, characters }: ListCharactersForRaceProps) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
      }}
    >
        <Text
            color='black'
            variant='h4'
        >
            {`${race} (${characters.length})`}
        </Text>
        <FlatList
            data={characters}
            renderItem={({ item }) => <CardItem {...item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
    </View>
      )
}
