import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { CategoryItem, Header } from './components';
import CATEGORIAS from './constants/data/categories.json';
import { COLORS } from './themes';

export default function App() {
  const onSelectCategory = (CategoryId) => {

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Categorias" />
        <FlatList
          data={CATEGORIAS}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => <CategoryItem {...item} onSelectCategory= { onSelectCategory} />  }      
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator = {false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoryContainer: {
    marginHorizontal: 25,
    marginTop: 25,
  },
  listCategory : {
    gap : 20,
    paddingBottom: 30,

  },
});