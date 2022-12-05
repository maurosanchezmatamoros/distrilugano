import { View } from 'react-native';
import { styles } from './styles';

const LogoBar = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.distriLugano}></View>
      <View style={styles.camion}></View>
    </View>
  );
};

export default LogoBar;
