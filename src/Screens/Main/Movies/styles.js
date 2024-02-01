import {hp, wp} from '../../../util';
import {StyleSheet} from 'react-native';

const createStyles = theme => {
  const styles = StyleSheet.create({
    container: {
     backgroundColor: theme.color.primaryText,
         },
    headerText: {
      fontFamily: theme.family.meduim,
      fontSize: theme.size.medium,
      color: theme.color.primaryColor,
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
   
   titleStyle:{
      alignSelf:'center',
       color: theme.color.primaryColor,
      padding:wp(3)
    }, activityInd: {
      height: hp(80),
    },mainContainer:{flex: 1}
  });
  return styles;
};
export default createStyles;
