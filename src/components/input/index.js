import { TextInput, View } from 'react-native';
import { styles } from './styles';

const Input = ({ style, styleInput }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TextInput style={{ ...styles.input, ...styleInput }} />
    </View>
  );
};

export default Input;
