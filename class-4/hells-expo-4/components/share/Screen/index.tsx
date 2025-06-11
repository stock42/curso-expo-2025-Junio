
import { View, StyleSheet, ScrollView }  from 'react-native'
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode
  scroll?: boolean
}

export function Screen({ children, scroll = true }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      {scroll ? (
        <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container, { paddingTop: insets.top }]}>
          {children}
        </View>
      )}
      
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 20,
  }
})