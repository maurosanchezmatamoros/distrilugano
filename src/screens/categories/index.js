import { View, FlatList } from 'react-native';
import { LogoBar, Button, FormatText } from '../../components/index';
import { Categories as Cats } from '../../data/index';

import { styles } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LogoBar />
      <FormatText style={styles.title}>CATEGORÍAS</FormatText>
      <View style={styles.buttonsContainer}>
        {Cats?.map((el) => (
          <Button
            key={el.id}
            children={el.name}
            action={() => navigation.navigate('Products', { el })}
          />
        ))}
      </View>
    </View>
  );
};

export default Categories;
