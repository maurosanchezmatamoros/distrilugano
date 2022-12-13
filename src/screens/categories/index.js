import { View } from 'react-native';
import { LogoBar, Button } from '../../components/index';
import Products from '../../data/index';

import { styles } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LogoBar />
      <View style={styles.buttonsContainer}>
        {Products?.map((el) => (
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
