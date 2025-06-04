
import { View, StyleSheet, ScrollView }  from 'react-native'

export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
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