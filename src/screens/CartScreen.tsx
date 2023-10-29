import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/Store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../component/HeaderBar';
import {getTabBarHeight} from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';
import EmptyListAnimation from '../component/EmptyListAnimation';
import PaymentFooter from '../component/PaymentFooter';
import CartItem from '../component/CartItem';

const CartScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const CartPrice = useStore((state: any) => state.CartPrice);

  const tabBarHeight = useBottomTabBarHeight();

  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );

  const buttonPressHandler = () => {
    navigation.push('Payment', {amount: CartPrice});
  };
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  console.log('CartList', CartList.length);
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollViewFlex,
          {marginBottom: tabBarHeight},
        ]}>
        <View style={styles.scrollViewInnerView}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />
            {CartList.length == 0 ? (
              <EmptyListAnimation title={'Cart is Empty'} />
            ) : (
              <View style={styles.listItemContainer}>
                {CartList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <CartItem
                      id={data.id}
                      name={data.name}
                      roasted={data.roasted}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      prices={data.prices}
                      type={data.type}
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {CartList.length != 0 ? (
            <PaymentFooter
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '$'}}
              bottomPressHandler={() => buttonPressHandler()}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  scrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
  },
  listItemContainer: {
    padding: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
