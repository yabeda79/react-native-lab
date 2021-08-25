import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { vh, vw } from '../../variables';
import { useAuth } from '../../hooks/auth.hook';
// import Video from 'react-native-video';
import VideoPlayer from '../../components/videoPlayer';

interface IHomePost {
	title: string;
	image: string;
	description: string;
	updatedAt: string;
	// topRef: any;
	isPaused?: boolean;
	setIsPaused?: (value: boolean) => void;
	offsetY: number;
	id: number;
}

interface IMeasure {
	left: number;
	top: number;
	width: number;
	height: number;
}

const HomePost: FC<IHomePost> = ({ title, image, description, updatedAt, offsetY, id }) => {
	const { user } = useAuth();

	const [isVideoMuted, setIsVideoMuted] = useState(true);

	const getUpdatedAgo = () => {
		const updatedAtYear = parseInt(updatedAt.slice(0, 4), 10);
		const updatedAtMonth = parseInt(updatedAt.slice(5, 7), 10);
		const updatedAtDay = parseInt(updatedAt.slice(8, 10), 10);
		const updatedAtHour = parseInt(updatedAt.slice(11, 13), 10);

		if (parseInt(new Date().getFullYear().toString(), 10) - updatedAtYear > 0) {
			return `${parseInt(new Date().getFullYear().toString(), 10) - updatedAtYear} years ago`;
		}

		if (parseInt(new Date().getMonth().toString(), 10) - updatedAtMonth > 0) {
			return `${parseInt(new Date().getMonth().toString(), 10) - updatedAtMonth + 1} months ago`;
		}

		if (parseInt(new Date().getDate().toString(), 10) - updatedAtDay > 0) {
			return `${parseInt(new Date().getDate().toString(), 10) - updatedAtDay} days ago`;
		}

		if (parseInt(new Date().getHours().toString(), 10) - updatedAtHour > 0) {
			return `${parseInt(new Date().getHours().toString(), 10) - updatedAtHour} hours ago`;
		}
	};

	return (
		<View style={styles.mainContainer}>
			<Image style={styles.avImage} source={require('../../Assets/Images/avatar.png')} />
			<Text style={styles.title}>Your Giving Impact ({title})</Text>
			<Text style={styles.updatedAgo}>
				St Jude {getUpdatedAgo()} {/*+ {isInCenter ? 'in center' : 'not in center'}*/}
			</Text>
			<TouchableOpacity
				style={styles.muteBtn}
				onPress={() => {
					setIsVideoMuted(!isVideoMuted);
				}}>
				<Image style={styles.muteBtn} source={require('../../Assets/Images/play.png')} />
			</TouchableOpacity>
			<VideoPlayer id={id} isVideoMuted={isVideoMuted} offsetY={offsetY} />
			<Text style={styles.postText}>
				{user?.username}, {description}, thanks for being amazing!
			</Text>
			<TouchableOpacity style={styles.shareBtn}>
				<View style={styles.shareBtnContentContainer}>
					<Image style={styles.shareBtnImage} source={require('../../Assets/Images/shareArrow.png')} />
					<Text style={styles.shareBtnText}>Share to spread the word</Text>
				</View>
			</TouchableOpacity>
		</View>
		// 		);
		// 	}}
		// </InCenterConsumer>
	);
};

export default HomePost;

const styles = StyleSheet.create({
	mainContainer: {
		width: 90 * vw,
		borderRadius: 10,
		backgroundColor: '#fff',
		marginBottom: 15,
	},
	avImage: {
		margin: 5,
	},
	title: {
		position: 'absolute',
		left: 60,
		top: 7,
		fontSize: 16,
	},
	updatedAgo: {
		position: 'absolute',
		left: 60,
		top: 30,
		color: '#919090',
	},
	muteBtn: {
		position: 'absolute',
		top: 35,
		right: 10,
		height: 30,
		width: 30,
		resizeMode: 'cover',
		zIndex: 5,
	},
	postText: {
		margin: 10,
	},
	shareBtn: {
		width: '70%',
		height: 40,
		borderRadius: 20,
		backgroundColor: '#F08080',
		alignSelf: 'center',
		marginBottom: 20,
	},
	shareBtnContentContainer: {
		alignSelf: 'center',
		width: '100%',
	},
	shareBtnImage: {
		resizeMode: 'contain',
		height: 12,
		width: 15,
		position: 'absolute',
		left: 8 * vw,
		top: 12,
	},
	shareBtnText: {
		color: '#fff',
		position: 'absolute',
		left: 14 * vw,
		top: 10,
	},
	video: {
		height: 100 * vh,
		width: 100 * vw,
	},
});
