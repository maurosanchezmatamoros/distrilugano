import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Button, LogoBar, FormatText } from '../../components/index';
import { Products as Prods } from '../../data/index';

const Products = ({ route, navigation }) => {
  const { item } = route.params;
  const categoryProducts = Prods.filter((el) => el.categoryId === item.id);
  console.log(categoryProducts);
  const renderItem = ({ item }) => (
    <Button
      children={`${item.name} ${item.weight}gr`}
      action={() => navigation.navigate('Detail', item.id)}
    />
  );
  return (
    <View style={styles.container}>
      <LogoBar />
      <FormatText style={styles.title}>{item.name}</FormatText>
      <View style={styles.buttonsContainer}>
        <FlatList
          data={categoryProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Products;
