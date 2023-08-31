import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';
import { Header } from './components';
import {Categories, Subcategory} from './screens';
import { COLORS, FONTS } from './themes';

const categoryDefault = {
  categoryId: null,
  color: COLORS.primary,
};

export default function App() {
  const [loaded] = useFonts ({
    [FONTS.regular] : require('../assets/fonts/Jost-Regular.ttf'),
    [FONTS.bold] : require('../assets/fonts/Jost-Bold.ttf'),
    [FONTS.light] : require('../assets/fonts/Jost-Light.ttf'),
    [FONTS.medium] : require('../assets/fonts/Jost-Medium.ttf'),
  });
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  const headerTitle = isCategorySelected ? 'Subcategoria' : 'Categorias';

  const onHandleSelectCategory = ({categoryId, color}) => {
    setSelectedCategory({categoryId, color});
    setIsCategorySelected(!isCategorySelected);
  };
  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(categoryDefault);
  };
  if (!loaded) {

    return (
      <View style ={styles.loaderContainer}>
    <ActivityIndicator color = {COLORS.primary} size = 'large'/>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} style={{ bacgroundColor:selectedCategory.color}} />
        {isCategorySelected ? (
          <Subcategory onHandleGoBack={onHandleNavigate} categorySelected = {selectedCategory}  />
        ) : (
          <Categories onSelectCategory={onHandleSelectCategory} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer : {
    flex : 1,
    justifyContent : 'center',
    alignContent: 'center',

  },
});