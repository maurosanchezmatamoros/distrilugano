import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({ children, style, textStyle }) => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...style }}>
      <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
