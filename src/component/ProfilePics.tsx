import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePics = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/app_images/profileImage.jpg')}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePics;

const styles = StyleSheet.create({
  imageContainer: {
    height: SPACING.space_30,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
