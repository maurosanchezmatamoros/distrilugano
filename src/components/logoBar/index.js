import { View } from 'react-native';
import { styles } from './styles';
import { DistriLugano, Camion } from '../icons/index';

const LogoBar = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <DistriLugano />
      <Camion />
    </View>
  );
};

export default LogoBar;
