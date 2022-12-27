import { View } from 'react-native';
import { styles } from './styles';
import { Button, LogoBar, FormatText } from '../../components/index';
import { Products as Prods } from '../../data/index';

const Products = ({ route, navigation }) => {
  const { el } = route.params;
  const categoryProducts = Prods.filter((item) => item.categoryId === el.id);
  return (
    <View style={styles.container}>
      <LogoBar />
      <FormatText style={styles.title}>{el.name}</FormatText>
      <View style={styles.buttonsContainer}>
        {categoryProducts.map((item) => (
          <Button
            key={item.id}
            children={`${item.name} ${item.weight}gr`}
            action={() => navigation.navigate('Detail', item.id)}
          />
        ))}
      </View>
    </View>
  );
};

export default Products;
