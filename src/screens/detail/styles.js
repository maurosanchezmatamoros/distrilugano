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
  },
  image: {
    width: 219,
    height: 308,
    alignSelf: 'center',
    margin: 20,
  },
  detailContainer: {
    marginVertical: 30,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
});
