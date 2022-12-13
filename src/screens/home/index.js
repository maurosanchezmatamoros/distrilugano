import { View } from 'react-native';
import { BrandLogo } from '../../components/icons';
import { styles } from './styles';
import { Input, FormatText, Button } from '../../components';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BrandLogo style={{ marginVertical: 20 }} />
      <View style={styles.inputContainer}>
        <FormatText>USUARIO</FormatText>
        <Input />
        <FormatText>CONTRASEÑA</FormatText>
        <Input />
        <FormatText>Olvidé mi contraseña</FormatText>
      </View>
      <Button
        style={styles.buttons}
        textStyle={styles.buttonsText}
        children={'INGRESAR'}
        action={() => navigation.navigate('Logged')}
      />
      <Button style={styles.buttons} textStyle={styles.buttonsText} children={'REGISTRARSE'} />
    </View>
  );
};

export default Home;
