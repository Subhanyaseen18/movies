import {
  ImageBackground,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Text from '../../../Components/CustomText';
import React, {useState, useEffect} from 'react';
import {useThemeAwareObject} from '../../../theme';
import createStyles from './styles';
import Container from '../../../Components/Container';
import Header from '../../../Components/CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../constants';
import {hp, wp} from '../../../util';
import {imageUrl} from '../../../constants/url';
import MasonryList from '@react-native-seoul/masonry-list';
import {moviesUrl} from '../../../Apis';
import Snackbar from '../../../Components/CustomSnackbar';
export default function Movies(props) {
  const styles = useThemeAwareObject(createStyles);
  const [apiData, setApiData] = useState([]);

  const {name, type} = props.route.params;

  const handleMovie = async () => {
    try {
      const res = await fetch(moviesUrl(type, name));
      if (res.status == 200) {
        const data = await res.json();
        setApiData(data.results);
      } else {
        Snackbar('Failed to fetch', true);
      }
    } catch (error) {
      Snackbar(error, true);
    }
  };

  useEffect(() => {
    handleMovie();
  }, []);

  const getChildrenStyle = () => {
    return {
      width: (wp(100) - wp(5)) / 2,
      height: Number(Math.random() * 20 + 12) * 10,
      overflow: 'hidden',
      margin: 5,
      borderRadius: 20,
      justifyContent: 'flex-end',
      alignItems: 'center',
    };
  };
  const reFresh = () => {
    setApiData([]);
    handleMovie();
  };

  return (
    <Container style={styles.container}>
      <Header
        backgroundColor={'black'}
        leftComponent={
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.containerBack}>
            <Icon name="arrow-back-circle" color={colors.white} size={hp(6)} />
          </TouchableOpacity>
        }
        centerComponent={
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.headerText}>{`${name} ${type}`}</Text>
        }
      />

      {apiData.length === 0 ? (
        <ActivityIndicator
          size="large"
          color={colors.white}
          style={styles.activityInd}
        />
      ) : (
        <View style={styles.mainContainer}>
          <MasonryList
            data={apiData}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('MovieDetail', {
                      title: item?.original_title
                        ? item?.original_title
                        : item?.original_name,
                      id: item?.id,
                      type: type,
                    });
                  }}>
                  {item.backdrop_path && (
                    <ImageBackground
                      source={{uri: imageUrl + item?.backdrop_path}}
                      style={getChildrenStyle()}>
                      {item?.original_title ? (
                        <Text style={styles.titleStyle}>
                          {item?.original_title}
                        </Text>
                      ) : (
                        <Text style={styles.titleStyle}>
                          {item?.original_name}
                        </Text>
                      )}
                    </ImageBackground>
                  )}
                </TouchableOpacity>
              );
            }}
            onRefresh={() => reFresh()}
          />
        </View>
      )}
    </Container>
  );
}
