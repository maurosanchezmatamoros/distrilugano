import { Text, View } from 'react-native';
import { FormatText, LogoBar, Button } from '../../components/index';

import { styles } from './styles';

const Logged = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LogoBar />
      <FormatText style={styles.title}>Bienvenido, FERNANDO LASALA</FormatText>
      <View>
        <Button children={'REALIZAR UN PEDIDO'} action={() => navigation.navigate('Categories')} />
        <Button children={'VER MIS PEDIDOS'} />
        <Button children={'CONTACTO'} />
      </View>
    </View>
  );
};

export default Logged;
