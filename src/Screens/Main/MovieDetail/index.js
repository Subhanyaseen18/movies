import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from '../../../Components/Container';
import {useThemeAwareObject} from '../../../theme';
import Header from '../../../Components/CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyles from './style';
import {colors} from '../../../constants';
import {hp} from '../../../util';
import {detailApiUrl} from '../../../Apis';
import {imageUrl} from '../../../constants/url';
import Snackbar from '../../../Components/CustomSnackbar';
import Text from '../../../Components/CustomText';
export default function MovieDetail(props) {
  const {title, id, type} = props.route.params;
  const [apiData, setApiData] = useState('');
  const styles = useThemeAwareObject(createStyles);
  const [expanded, setExpanded] = useState(false);
  const handleMovie = async () => {
    try {
      const res = await fetch(detailApiUrl(type, id));
      if (res.status == 200) {
        const data = await res.json();
        setApiData(data);
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
  const roundedUp = Math.round(apiData?.vote_average * 10) / 10; // Rounds to one decimal place
  const firstCharacters = apiData?.overview?.substring(0, 100);
  return (
    <Container style={styles.container}>
      <Header
        backgroundColor={colors.black}
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
            style={styles.headerText}>{`${title}`}</Text>
        }
      />
      {apiData === '' ? (
        <ActivityIndicator
          size="large"
          color={colors.white}
          style={styles.activityInd}
        />
      ) : (
        <ScrollView style={styles.scrollView}>
          <Image
            resizeMode="cover"
            source={{uri: imageUrl + apiData?.backdrop_path}}
            style={styles.imageStyle}
          />

          {type === 'Movies' ? (
            <View>
              <Text style={styles.nameStyle}>{apiData?.original_title}</Text>
              <Text style={styles.overViewStyle}>
                {expanded ? apiData?.overview : firstCharacters}
                {firstCharacters.length == 100 && (
                  <Text
                    style={styles.seeMoreStyle}
                    onPress={() => setExpanded(!expanded)}>
                    {expanded ? 'See less' : 'See more'}
                  </Text>
                )}
              </Text>
              <Text style={styles.textStyle}>
                Title : {apiData?.original_title}
              </Text>
              <Text style={styles.textStyle}>
                Release date : {apiData?.release_date}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.nameStyle}>{apiData?.name}</Text>
              { apiData?.overview !== "" && (
                <Text style={styles.overViewStyle}>
                  {expanded ? apiData?.overview : firstCharacters}
                  {firstCharacters.length == 100 && (
                    <Text
                      style={styles.seeMoreStyle}
                      onPress={() => setExpanded(!expanded)}>
                      {expanded ? 'See less' : 'See more'}
                    </Text>
                  )}
                </Text>
              )}
              <Text style={styles.textStyle}>Title : {apiData?.name}</Text>
              <Text style={styles.textStyle}>
                Release date : {apiData?.first_air_date}
              </Text>
              <Text style={styles.textStyle}>
                Episodes : {apiData?.number_of_episodes}
              </Text>
            </View>
          )}
          <Text style={styles.textStyle}>Status : {apiData?.status}</Text>
          <Text style={styles.textStyle}>Rating : {roundedUp}</Text>
          <View style={styles.genresContainer}>
            <Text style={styles.textStyle}>
              genres :
              {apiData?.genres.map((item, index) => (
                <Text key={index} style={styles.genresStyle}>
                  {item.name}
                  {index !== apiData.genres.length - 1 && <Text>,</Text>}
                </Text>
              ))}
            </Text>
          </View>
        </ScrollView>
      )}
    </Container>
  );
}
