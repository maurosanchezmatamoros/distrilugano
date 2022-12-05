import { View } from 'react-native';
import { styles } from './styles';

const Counter = ({ style }) => {
  return <View style={{ ...styles.container, ...style }}></View>;
};

export default Counter;
