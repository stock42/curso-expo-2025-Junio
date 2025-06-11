import { TouchableOpacity } from "react-native"
import { Text } from "@/components/share/Text"

type FloatButtonProps = {
    onPress: () => void;
}

export function FloatButton({ onPress }: FloatButtonProps) {
    return (
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
        onPress={() => onPress()}
      >
        <Text color='white'>UP</Text>
      </TouchableOpacity>
    )
}
