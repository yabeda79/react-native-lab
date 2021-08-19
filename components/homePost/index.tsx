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
}

const HomePost: FC<IHomePost> = ({ title, image, description, updatedAt }) => {
	const { user } = useAuth();

	const [isPlayerActive, setIsPlayerActive] = useState(false);

	const getUpdatedAgo = () => {
		const updatedAtYear = parseInt(updatedAt.slice(0, 4), 10);
		const updatedAtMonth = parseInt(updatedAt.slice(5, 7), 10);
		const updatedAtDay = parseInt(updatedAt.slice(8, 10), 10);
		const updatedAtHour = parseInt(updatedAt.slice(11, 13), 10);

		// console.log(`${updatedAtYear} - ${new Date().getFullYear().toString()}`);
		// console.log(`${updatedAtMonth} - ${new Date().getMonth().toString()}`);
		// console.log(`${updatedAtDay} - ${new Date().getDate().toString()}`); // mistake
		// console.log(`${updatedAtHour} - ${new Date().getHours().toString()}`);

		// console.log(`${parseInt(new Date().getFullYear().toString(), 10) - updatedAtYear} years ago`);
		// console.log(`${parseInt(new Date().getMonth().toString(), 10) - updatedAtMonth + 1} months ago`);
		// console.log(`${parseInt(new Date().getDate().toString(), 10) - updatedAtDay} days ago`);
		// console.log(`${parseInt(new Date().getHours().toString(), 10) - updatedAtHour} hours ago`);

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

	console.log(image);

	return (
		<View style={styles.mainContainer}>
			<Image style={styles.avImage} source={require('../../Assets/Images/avatar.png')} />
			<Text style={styles.title}>Your Giving Impact ({title})</Text>
			<Text style={styles.updatedAgo}>St Jude {getUpdatedAgo()}</Text>
			<TouchableOpacity
				onPress={() => {
					setIsPlayerActive(!isPlayerActive);
				}}>
				{/* <Image style={styles.postImage} source={{ uri: image }} /> */}
				<VideoPlayer isPlayerActive={isPlayerActive} setIsPlayerActive={setIsPlayerActive} />
			</TouchableOpacity>
			<Text style={styles.postText}>
				{user?.userId}, {description}, thanks for being amazing!
			</Text>

			<TouchableOpacity style={styles.shareBtn}>
				<View style={styles.shareBtnContentContainer}>
					<Image style={styles.shareBtnImage} source={require('../../Assets/Images/shareArrow.png')} />
					<Text style={styles.shareBtnText}>Share to spread the word</Text>
				</View>
			</TouchableOpacity>
		</View>
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
	postImage: {
		width: '100%',
		height: 200,
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
