import React, { useState, useRef, FC, useEffect } from 'react';

import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';

import Video, { OnProgressData, OnLoadData, OnSeekData } from 'react-native-video';

import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { vh, vw } from '../../variables';

interface IVideo {
	isVideoMuted: boolean;
	setIsVideoMuted?: (value: boolean) => void;
	offsetY?: number;
	setIsPaused?: (value: boolean) => void;
	key: number;
}

const VideoPlayer: FC<IVideo> = ({ isVideoMuted, offsetY, key }) => {
	const videoPlayer = useRef();

	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isPaused, setIsPaused] = useState(true);
	const [playerState, setPlayerState] = useState<PLAYER_STATES>(PLAYER_STATES.PLAYING);
	// const [screenType, setScreenType] = useState('content');
	// const [pos, setPos] = useState(0);

	const onSeek = (seek: OnSeekData) => {
		videoPlayer.current.seek(seek);
	};

	const onPaused = (playerStatePar: PLAYER_STATES) => {
		setIsPaused(!isPaused);
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

	const onFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	const onSeeking = (currentTimePar: number) => setCurrentTime(currentTimePar);

	// if (!isPlayerActive) {
	// 	return null;
	// }

	const getCurrentPosition = (e: LayoutChangeEvent) => {
		console.log(e.nativeEvent.layout.y);
	};

	// const autoplayOnPosition = () => {
	// 	if (e.nativeEvent.layout.x > 40 * vh) {
	// 		setIsPaused(false);
	// 	}
	// 	if (e.nativeEvent.layout.x > 90 * vh) {
	// 		setIsPaused(true);
	// 	}
	// 	console.log(isPaused);
	// };

	const isOnAutoPlay = () => {
		if (offsetY > 25 * vh * key) {
			setIsPaused(false);
		} else {
			setIsPaused(true);
		}
		// if (offsetY < 35 * vh * key * 2) {
		// 	setIsPaused(true);
		// }
	};

	useEffect(() => {
		isOnAutoPlay();
	}, [offsetY]);

	return (
		<View style={styles.mainContainer}>
			<Video
				onLayout={(e) => {
					getCurrentPosition(e);
				}}
				muted={isVideoMuted}
				onEnd={onEnd}
				onLoad={(data) => onLoad(data)}
				onLoadStart={onLoadStart}
				onProgress={(data: OnProgressData) => onProgress(data)}
				paused={isPaused}
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
				onFullScreen={() => {
					onFullScreen();
				}}
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
