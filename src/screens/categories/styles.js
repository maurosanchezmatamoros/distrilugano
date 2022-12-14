import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
