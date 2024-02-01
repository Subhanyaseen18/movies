import {hp, wp} from '../../../util';
import {StyleSheet} from 'react-native';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:  theme.color.defaultBackground,
    },
    headerText: {
      fontFamily:'Exo2-BorderlessButton.ttf',
      fontSize: theme.size.medium,
      color: theme.color.primaryColor,
    },
    containerBtn: {
      width: wp(100),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },

    containerheading: {
      alignSelf: 'center',
      justifyContent:'center',
    },
    headingText: {
      fontFamily: theme.family.large,
      fontSize: theme.size.medium,
      color: theme.color.primaryColor,
      alignSelf: 'center',
      marginBottom: hp(3),
    },
   
    maincontainerWatch: {
      flexDirection: 'row',
      width: wp(100),
      justifyContent: 'space-evenly',
     
    },
    textStyle: {
      height: hp(8),
      width: wp(40),
    },
    backgroundVideo: {
      height: hp(120),
      width: wp(100),
      position: 'absolute',
      top: 0,
      left: 0,
      alignItems: 'stretch',
      bottom: 0,
      right: 0,
    },mainContainer:{flex:1,justifyContent:'center'}
  });
  return styles;
};
export default createStyles;
