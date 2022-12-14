import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: 321,
    height: 51,
    backgroundColor: colors.grey,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Jost',
    color: colors.black,
  },
  image: {
    height: 115,
    resizeMode: 'scale-down',
  },
});
