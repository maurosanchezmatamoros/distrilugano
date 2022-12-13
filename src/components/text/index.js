import { styles } from './styles';
import { Text } from 'react-native';

const FormatText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default FormatText;
