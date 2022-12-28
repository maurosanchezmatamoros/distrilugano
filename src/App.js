import { ActivityIndicator, StyleSheet, View, SafeAreaView } from 'react-native';

import { useFonts } from 'expo-font';
import AppNavigator from './navigation';
import { colors } from './constants/colors';

export default function App() {
  const [loaded] = useFonts({
    PatrickHand: require('../assets/fonts/PatrickHand-Regular.ttf'),
    JostItalic: require('../assets/fonts/Jost-Italic-VariableFont_wght.ttf'),
    Jost: require('../assets/fonts/Jost-VariableFont_wght.ttf'),
    Joyce: require('../assets/fonts/Joyce-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#ccc" size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
