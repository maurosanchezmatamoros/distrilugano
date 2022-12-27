import { Image, View } from 'react-native';
import { styles } from './styles';
import { FormatText, LogoBar } from '../../components/index';
import { Products as Prods } from '../../data/index';

const Detail = ({ route }) => {
  const itemId = route.params;
  const productSelected = Prods.find((item) => item.id === itemId);

  return (
    <View style={styles.container}>
      <LogoBar />
      <View style={styles.detailContainer}>
        <FormatText
          style={styles.title}
          children={`${productSelected.name} ${productSelected.weight}gr`}
        />
        <Image
          source={require('../../../assets/img/clasicas.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
        <View>
          <FormatText children={`Código: ${productSelected.id}`} />
          <FormatText children={`Unidades por caja: ${productSelected.box}`} />
          <FormatText children={`Precio unid. c/iva: $${productSelected.price}`} />
          <FormatText children={`Precio sugerido: $${productSelected.price * 1.4}`} />
          <FormatText children={`Código de barras: `} />
          <FormatText children={`DUN 14: `} />
        </View>
      </View>
    </View>
  );
};

export default Detail;
