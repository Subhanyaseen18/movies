import {View, TouchableOpacity, BackHandler} from 'react-native';
import Text from '../../../Components/CustomText';
import React, {useState, useEffect} from 'react';
import createStyles from './style';
import {useThemeAwareObject} from '../../../theme';
import Container from '../../../Components/Container';
import Header from '../../../Components/CustomHeader';
import CustomButton from '../../../Components/customButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../constants';
import {hp} from '../../../util';
import Video from 'react-native-video';
export default function Questions(props) {
  const styles = useThemeAwareObject(createStyles);
  const [watch, setWatch] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const handleBackButton = () => {
      if (watch) {
        setWatch(false);
        return true; // Do not exit the app
      }
      return false; // Allow the app to exit
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => {
      backHandler.remove();
    };
  }, [watch]);

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
            watch == true && (
              <TouchableOpacity
                onPress={() => setWatch(false)}
                style={styles.containerBack}>
                <Icon
                  name="arrow-back-circle"
                  color={colors.white}
                  size={hp(6)}
                />
              </TouchableOpacity>
            )
          }
          centerComponent={
            <Text style={styles.headerText}>Movie Recommender</Text>
          }
        />
        {watch ? (
          <View style={styles.mainContainer}>
            <View style={styles.containerheading}>
              <Text style={styles.headingText}>What do you like to watch?</Text>
            </View>
            <View style={styles.maincontainerWatch}>
              <CustomButton
                onPress={() =>
                  props.navigation.navigate('Mood', {
                    type: 'Movies',
                  })
                }
                style={styles.textStyle}
                text="Movies"
              />
              <CustomButton
                style={styles.textStyle}
                text="Tv shows"
                onPress={() =>
                  props.navigation.navigate('Mood', {
                    type: 'Tv shows',
                  })
                }
              />
            </View>
          </View>
        ) : (
          <View style={styles.mainContainer}>
            <View style={styles.containerheading}>
              <Text style={styles.headingText}>How are you feeling today?</Text>
            </View>
            <View style={styles.containerBtn}>
              <CustomButton
                text="Happy"
                onPress={() => setWatch(true)}
                lottieIcon={require('../../../../assets/lottieFiles/happy.json')}
              />
              <CustomButton
                onPress={() => setWatch(true)}
                text="Sad"
                lottieIcon={require('../../../../assets/lottieFiles/sad.json')}
              />
              <CustomButton
                onPress={() => setWatch(true)}
                text="Neutral"
                lottieIcon={require('../../../../assets/lottieFiles/neutral.json')}
              />
            </View>
          </View>
        )}
      </View>
    </Container>
  );
}
