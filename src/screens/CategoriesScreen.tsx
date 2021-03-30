import React from 'react';
import {FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {categoryId: itemData.item.id},
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
    />
    // <View style={styles.screen}>
    //   <Text style={styles.text}>CategoriesScreen !!</Text>
    //   <Button
    //     title="Go to Meals!"
    //     onPress={() => {
    //       //props.navigation.navigate({routeName: 'CategoryMeals'});
    //       props.navigation.replace({routeName: 'CategoryMeals'});
    //       // props.navigation.push('Categories'); // sometimes go to same folder name on same page  that time push will work
    //     }}
    //   />
    // </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meals Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesScreen;
