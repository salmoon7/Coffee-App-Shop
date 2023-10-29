import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientIcon from './GradientIcon';
import ProfilePics from './ProfilePics';
import CustomIcon from './CustomIcon';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <View style={styles.adress}>
        <CustomIcon name="location" size={15} color={COLORS.primaryBlackHex} />
        <Text style={styles.adressText}>Lagos,Nigeria</Text>
      </View>
      <ProfilePics />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  adress: {
    flexDirection: 'row',
    gap: 5,
  },
  adressText: {
    color: COLORS.primaryBlackHex,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
});
