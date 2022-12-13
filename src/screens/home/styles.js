import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  buttons: {
    backgroundColor: colors.black,
    width: 138,
    height: 39,
  },
  buttonsText: {
    color: colors.primary,
  },
});
