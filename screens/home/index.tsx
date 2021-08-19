/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootHomeStackParams } from '../../components/homeStack';

import AccountHomeReview from '../../components/accountHomeReview';
import HomePost from '../../components/homePost';

import { getUserSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

import { useHttp } from '../../hooks/http.hook';
import { vw, vh } from '../../variables';

type HomeScreenNavProp = StackNavigationProp<RootHomeStackParams, 'HomeScreen'>;

interface IHome {
	navigation: HomeScreenNavProp;
}

interface IHomePostState {
	id: number;
	title: string;
	image: string;
	description: string;
	createdAt: string;
	updatedAt: string;
}

const Home: FC<IHome> = ({ navigation }) => {
	const [helloMessage, setHelloMessage] = useState('');
	const [homePosts, setHomePosts] = useState<IHomePostState[]>();

	const currentUser = useSelector(getUserSelector);

	const { request } = useHttp();

	const getCurrentMessage = () => {
		const hour = new Date().getHours().toString();
		if (hour <= '11' && hour > '5') {
			return 'Good morning';
		}
		if (hour <= '18') {
			return 'Good afternoon';
		}
		if (hour <= '22') {
			return 'Good evening';
		}
		if (hour <= '5' && hour > '22') {
			return 'Good night';
		}
	};

	const sayHello = () => {
		setHelloMessage(
			`${getCurrentMessage()}, ${currentUser?.userId} | ${new Date().getDate().toString()}-${new Date()
				.getMonth()
				.toString()}-${new Date().getFullYear().toString()}`,
		);
	};

	const getPosts = async () => {
		const data = await request('/api/posts/getAllPosts');
		setHomePosts(data);
	};

	useEffect(() => {
		sayHello();
		getPosts();
	}, []);

	const navigateToHandler = (path: string) => {
		switch (path) {
			case 'Saving':
				navigation.navigate('Saving');
				break;
			case 'Checking':
				navigation.navigate('Checking');
				break;
			default:
				break;
		}
	};

	return (
		<ScrollView style={styles.mainContainer}>
			<Text style={styles.helloMessage}>{helloMessage}</Text>
			<View style={styles.centerContainer}>
				<AccountHomeReview navigateToHandler={navigateToHandler} />
				{/* <Button title="Go to Saving" onPress={() => navigateToHandler('Saving')} />
				<Button title="Go to Checking" onPress={() => navigateToHandler('Checking')} /> */}
				<View style={styles.postsContainer}>
					{homePosts?.map(({ id, title, image, description, updatedAt }) => (
						<HomePost key={id} title={title} image={image} description={description} updatedAt={updatedAt} />
					))}
				</View>
			</View>
			<View style={{ height: 200 }} />
		</ScrollView>
	);
};
export default Home;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		height: 10000,
		backgroundColor: '#f1f0f0',
	},
	helloMessage: {
		marginVertical: 10,
		marginHorizontal: 20,
	},
	centerContainer: {
		alignItems: 'center',
	},
	tabBarContainer: {
		position: 'absolute',
		width: '100%',
		bottom: 20,
	},
	postsContainer: {
		// width: 90 * vw,
		marginTop: 20,
	},
});
