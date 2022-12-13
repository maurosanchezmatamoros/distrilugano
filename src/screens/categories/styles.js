import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PatrickHand',
    fontSize: 32,
    color: 'red',
  },
  buttonsContainer: {
    marginVertical: 30,
  },
});
