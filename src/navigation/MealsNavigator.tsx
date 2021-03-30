import React from 'react';
import {Text} from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FilterScreen from '../screens/FilterScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';

// const MealsNavigator = createSwitchNavigator({
//   Categories: CategoriesScreen,
//   CategoryMeals: {
//     screen: CategoryMealsScreen,
//   },
//   MealDetail: MealDetailsScreen,
// });
// export default createAppContainer(MealsNavigator);

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Bold',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen',
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen, //can also be Categories: {screen: CategoriesScreen},
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    // initialRouteName: 'Mealdetail', //you can set initial screen
    mode: 'modal', // modal has different animation effect
    defaultNavigationOptions: defaultStackNavOptions,
    //navigationOptions: {}, properties can customized per-screen
  },
);
const FavStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen,
  },
  {defaultNavigationOptions: defaultStackNavOptions},
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{fontFamily: 'OpenSans-Bold'}}>MEALS !!!</Text>
        ) : (
          'MEALS !!!'
        ), //style don`t want to override in ios
    },
  },
  Favorites: {
    screen: FavStackNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{fontFamily: 'OpenSans-Bold'}}>FAVORITES</Text>
        ) : (
          'FAVORITES'
        ), // override different tab label title
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};
const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? //npm install --save react-navigation-material-bottom-tabs
      //npm install --save react-native-paper
      createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'OpenSans-Regular',
          },
          activeTintColor: Colors.accentColor,
        },
      });
const FilterNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    navigationOptions: {
      drawerLabel: 'Filter!!!!!',
    },
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: MealsFavTabNavigator, // use can set here also navigationOptions MealsFavs: { screen: MealsFavTabNavigator, navigationOptions: {drawerLabel: 'Meals}}
    Filters: FilterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'OpenSans-Bold',
      },
    },
  },
);
export default createAppContainer(MainNavigator);
