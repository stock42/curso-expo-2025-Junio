import { FlatList, TouchableOpacity } from 'react-native'
import { Text } from '@/components/share/Text'

type ListOptionsProps = {
    options: string[];
    onPress: (value: string, index: number) => void;
}

export function ListOptions({options, onPress }: ListOptionsProps) {
    return (
         <FlatList
            data={options}
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
                onPress={() => onPress(item, index)}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
            )}
            horizontal
            keyExtractor={(item) => item}
            initialNumToRender={6}
        />
    ) 
}