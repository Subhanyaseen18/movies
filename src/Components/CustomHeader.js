import {Header} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useThemeAwareObject} from '../theme';
import {wp,hp} from '../util';

function CustomHeader(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({
      statusBar: {
        backgroundColor: theme.color.primaryText,
        // height:hp(20)
      },
      backgroundColor: 'transparent',
      containerStyle: {
        borderBottomColor: 'transparent',
        // borderBottomLeftRadius: theme.borders.radius2, 
        // borderBottomRightRadius: theme.borders.radius2,
        // height:hp(14.5)
      },
      sideContainerStyle: {
        marginHorizontal: wp(2),
        justifyContent: 'center',
      },
      centerContainerStyle: {
        justifyContent: 'center',
      },
    });
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <Header
      statusBarProps={props.statusbar ?? styles.statusBar}
      barStyle={props.barStyle ?? 'light-content'}
      placement={props.placement ?? 'center'}
      leftComponent={props.leftComponent}
      centerComponent={({allowFontScaling: false}, props.centerComponent)}
      rightComponent={props.rightComponent}
      backgroundColor={props.backgroundColor ?? styles.backgroundColor}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      centerContainerStyle={[
        styles.centerContainerStyle,
        props.centerContainerStyle,
      ]}
      leftContainerStyle={[styles.sideContainerStyle, props.leftContainerStyle]}
      rightContainerStyle={[
        styles.sideContainerStyle,
        props.rightContainerStyle,
      ]}
    />
  );
}

export default CustomHeader;
