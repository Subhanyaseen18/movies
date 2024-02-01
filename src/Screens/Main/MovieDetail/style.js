import {hp, wp} from '../../../util';
import {StyleSheet} from 'react-native';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {backgroundColor: theme.color.primaryText},
    headerText: {
      fontFamily: theme.family.meduim,
      fontSize: theme.size.medium,
      color: theme.color.primaryColor,
    },
    activityInd: {height: hp(80)},
    imageStyle: {
      height: hp(28),
      width: wp(94),
      alignSelf: 'center',
      borderRadius: theme.borders.radius2,
      marginBottom: hp(1),
    },
    overViewStyle: {
      color: theme.color.primaryColor,
      width: wp(92),
      alignSelf: 'center',
      paddingBottom: hp(1),
    },
    nameStyle: {
      color: theme.color.error,
      paddingLeft: wp(4),
      width: wp(92),
      marginTop:hp(2),
      paddingBottom: hp(1),
    },
    textStyle: {
      color: theme.color.primaryColor,
      paddingLeft: wp(4),
      paddingBottom: hp(1),
      width: wp(92),
    },
    seeMoreStyle: {
      color: theme.color.error,
      paddingLeft: wp(4),
      paddingBottom: hp(1),
      textDecorationLine: 'underline',
    },
    genresStyle:{
      color: theme.color.primaryColor,

    },genresContainer:{flexDirection: 'row'}
  });
  return styles;
};
export default createStyles;
