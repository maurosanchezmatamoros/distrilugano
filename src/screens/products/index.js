import { View } from 'react-native';
import { styles } from './styles';
import { Button, LogoBar } from '../../components/index';

const Products = ({ route, navigation }) => {
  const { el } = route.params;
  return (
    <View style={styles.container}>
      <LogoBar />
      <View style={styles.buttonsContainer}>
        {el.products.map((item) => (
          <Button
            key={item.id}
            children={`${item.name} ${item.weight}gr`}
            action={() => navigation.navigate('Detail', { item })}
          />
        ))}
      </View>
    </View>
  );
};

export default Products;
