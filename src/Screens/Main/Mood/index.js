import {
  ImageBackground,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Text from '../../../Components/CustomText';
import React, {useState, useEffect} from 'react';
import createStyles from './style';
import {useThemeAwareObject} from '../../../theme';
import Container from '../../../Components/Container';
import Header from '../../../Components/CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../constants';
import {hp} from '../../../util';
import Video from 'react-native-video';
import {moodUrl} from '../../../Apis';

export default function Mood(props) {
  const {type} = props.route.params;
  const styles = useThemeAwareObject(createStyles);
  const [apiData, setApiData] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleMovie = async () => {
    try {
      const res = await fetch(moodUrl(type));
      if (res.status == 200) {
        const data = await res.json();
        setApiData(data.genres);
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
  const videos = [
    require('../../../../assets/videos/part1.mp4'),
    require('../../../../assets/videos/part2.mp4'),
    require('../../../../assets/videos/part3.mp4'),
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      // Choose a random index for the next video
      const nextVideoIndex = Math.floor(Math.random() * videos.length);
      setCurrentVideoIndex(nextVideoIndex);
    }, 20000); // 20 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  });
  return (
    <Container>
      <Video
        source={videos[currentVideoIndex]}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode="cover"
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />

      <View style={styles.container}>
        <Header
          leftComponent={
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.containerBack}>
              <Icon
                name="arrow-back-circle"
                color={colors.white}
                size={hp(6)}
              />
            </TouchableOpacity>
          }
          centerComponent={<Text style={styles.headerText}>{type}</Text>}
        />
        {apiData.length === 0 ? (
          <ActivityIndicator
            size="large"
            color={colors.white}
            style={styles.activityInd}
          />
        ) : (
          <FlatList
            data={apiData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Movies', {
                      name: item.name,
                      type: type,
                    })
                  }
                  style={styles.flatContainer}>
                  <Text style={styles.styleText}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
            style={styles.flatList}
          />
        )}
      </View>
    </Container>
  );
}
