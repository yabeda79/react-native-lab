import React, { useState, useRef, FC } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Video, { OnProgressData, OnLoadData, OnSeekData } from 'react-native-video';

import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { vh, vw } from '../../variables';

interface IVideo {
	isPlayerActive: boolean;
	setIsPlayerActive: (value: boolean) => void;
}

const VideoPlayer: FC<IVideo> = ({ isPlayerActive, setIsPlayerActive }) => {
	const videoPlayer = useRef(null);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [paused, setPaused] = useState(false);
	const [playerState, setPlayerState] = useState<PLAYER_STATES>(PLAYER_STATES.PLAYING);
	const [screenType, setScreenType] = useState('content');

	const onSeek = (seek: OnSeekData) => {
		videoPlayer.current.seek(seek);
	};

	const onPaused = (playerStatePar: PLAYER_STATES) => {
		setPaused(!paused);
		setPlayerState(playerStatePar);
	};

	const onReplay = () => {
		setPlayerState(PLAYER_STATES.PLAYING);
		videoPlayer.current.seek(0);
	};

	const onProgress = (data: OnProgressData) => {
		if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
			setCurrentTime(data.currentTime);
		}
	};

	const onLoad = (data: OnLoadData) => {
		setDuration(data.duration);
		setIsLoading(false);
	};

	const onLoadStart = () => setIsLoading(true);

	const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

	// const onError = () => alert('Oh! ', error);

	// const exitFullScreen = () => {
	// 	alert('Exit full screen');
	// };

	// const enterFullScreen = () => {};

	// const onFullScreen = () => {
	// 	setIsFullScreen(!isFullScreen);
	// 	if (screenType === 'content') {
	// 		setScreenType('cover');
	// 	} else {
	// 		setScreenType('content');
	// 	}
	// };

	const onSeeking = (currentTimePar: number) => setCurrentTime(currentTimePar);

	if (!isPlayerActive) {
		return null;
	}

	console.log(isFullScreen);

	return (
		<View style={styles.mainContainer}>
			<Video
				onEnd={onEnd}
				onLoad={(data) => onLoad(data)}
				onLoadStart={onLoadStart}
				onProgress={(data: OnProgressData) => onProgress(data)}
				paused={paused}
				ref={videoPlayer}
				// resizeMode={screenType}
				resizeMode="contain"
				fullscreen={isFullScreen}
				source={{
					uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
				}}
				style={styles.mediaPlayer}
				volume={10}
			/>
			<MediaControls
				containerStyle={styles.container} //required
				isFullScreen={isFullScreen} // required
				duration={duration}
				isLoading={isLoading}
				mainColor="#333"
				// onFullScreen={() => {
				// 	onFullScreen();
				// }}
				onPaused={onPaused}
				onReplay={onReplay}
				onSeek={() => onSeek}
				onSeeking={onSeeking}
				playerState={playerState}
				progress={currentTime}
				// toolbar={renderToolbar()}
			>
				<View />
				{/* <Text style={styles.toolbar}> Toolbar</Text> */}
				{/* </View> */}
			</MediaControls>
		</View>
	);
};

export default VideoPlayer;

const styles = StyleSheet.create({
	mainContainer: {
		// position: 'absolute',
		// width: 300, // 100 * vw,
		// height: 300, // 100 * vh,
		height: 200,
	},
	container: {
		flex: 1,
	},
	toolbar: {
		marginTop: 30,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 5,
	},
	mediaPlayer: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: 'black',
		justifyContent: 'center',
	},
});
