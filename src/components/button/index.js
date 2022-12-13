import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';

const Button = ({ children, style, textStyle, action }) => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...style }} onPress={action}>
      <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
