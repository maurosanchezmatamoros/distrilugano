import { Image, View } from 'react-native';
import { styles } from './styles';
import { FormatText, LogoBar } from '../../components/index';

const Detail = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <LogoBar />
      <View style={styles.detailContainer}>
        <FormatText style={styles.title} children={`${item.name} ${item.weight}gr`} />
        <Image
          source={require('../../../assets/img/clasicas.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
        <View>
          <FormatText children={`Código: ${item.id}`} />
          <FormatText children={`Unidades por caja: ${item.box}`} />
          <FormatText children={`Precio unid. c/iva: ${item.price}`} />
          <FormatText children={`Precio sugerido: ${item.suggested}`} />
          <FormatText children={`Código de barras: `} />
          <FormatText children={`DUN 14: `} />
        </View>
      </View>
    </View>
  );
};

export default Detail;
