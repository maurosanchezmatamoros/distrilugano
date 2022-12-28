import { View, FlatList, SafeAreaView } from 'react-native';
import { LogoBar, Button, FormatText } from '../../components/index';
import { Categories as Cats } from '../../data/index';

import { styles } from './styles';

const Categories = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Button children={item.name} action={() => navigation.navigate('Products', { item })} />
  );
  return (
    <View style={styles.container}>
      <LogoBar />
      <FormatText style={styles.title}>CATEGORÍAS</FormatText>
      <View style={styles.buttonsContainer}>
        <FlatList data={Cats} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </View>
  );
};

export default Categories;
