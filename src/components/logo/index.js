import { View } from 'react-native';
import { styles } from './styles';

const Logo = ({ style }) => {
  return <View style={{ ...styles.container, ...style }}></View>;
};

export default Logo;
