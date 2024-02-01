import {hp, wp} from '../../../util';
import {StyleSheet} from 'react-native';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.defaultBackground,
    },
    headerText: {
      fontFamily: theme.family.meduim,
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
      marginTop: hp(20),
    },
    headingText: {
      fontFamily: theme.family.large,
      fontSize: theme.size.medium,
      color: theme.color.primaryColor,
      alignSelf: 'center',
      marginBottom: hp(3),
    },
  
   
    styleText: {
      fontFamily: theme.family.large,
      fontSize: theme.size.medium,
      color: theme.color.primaryColor,
    },
    flatContainer: {
     marginTop: hp(0.5),
     marginBottom:hp(0.5),
     alignSelf:'center',
      paddingLeft: wp(5),
      backgroundColor: theme.color.defaultBackground,
      height: hp(6),
      justifyContent: 'center',
      borderRadius: theme.borders.radius2,
      width: wp(90),
    },
    backgroundVideo: {
      height: hp(110),
      width: wp(100),
      position: 'absolute',
      top: 0,
      left: 0,
      alignItems: 'stretch',
      bottom: 0,
      right: 0,
    },
    activityInd:{
      height:hp(80)
    }
  });
  return styles;
};
export default createStyles;
