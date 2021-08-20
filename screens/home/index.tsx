/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootHomeStackParams } from '../../components/homeStack';

import AccountHomeReview from '../../components/accountHomeReview';
import HomePost from '../../components/homePost';

import { getUserSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

import { useHttp } from '../../hooks/http.hook';
import { vw, vh } from '../../variables';

// import { OffsetYProvider, IndexProvider, InCenterConsumer } from '@n1ru4l/react-in-center-of-screen';
import { Viewport } from '@skele/components';

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
	const [offsetY, setOffsetY] = useState(0);

	// const topRef = useRef(null);

	const currentUser = useSelector(getUserSelector);

	const { request } = useHttp();

	const getCurrentMessage = () => {
		const hour = parseInt(new Date().getHours().toString(), 10);
		console.log(hour);
		if (hour <= 11 && hour > 5) {
			return 'Good morning';
		}
		if (hour <= 18) {
			return 'Good afternoon';
		}
		if (hour <= 22) {
			return 'Good evening';
		}
		if (hour <= 5 && hour > 22) {
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
		<Viewport.Tracker>
			<ScrollView
				style={styles.mainContainer}
				onScroll={(e) => {
					const { width, height } = Dimensions.get('window');

					// console.log('wh', width, height / 3);
					console.log(`vw: ${width}; vh/3: ${height / 3}`);

					console.log(e.nativeEvent.contentOffset.y);

					setOffsetY(e.nativeEvent.contentOffset.y);
				}}>
				<Text style={styles.helloMessage}>{helloMessage}</Text>
				<View style={styles.centerContainer}>
					<AccountHomeReview navigateToHandler={navigateToHandler} />

					{/* <OffsetYProvider
					columnsPerRow={1}
					listItemHeight={30 * vh}
					centerYStart={(100 * vh * 1) / 3}
					centerYEnd={(100 * vh * 2) / 3}>
					{() => (
						<View style={styles.postsContainer}>
							{homePosts?.map(({ id, title, image, description, updatedAt }) => (
								<IndexProvider index={id}>
									{() => (
										<HomePost
											key={id}
											title={title}
											image={image}
											description={description}
											updatedAt={updatedAt}
											isPaused={isPaused}
											setIsPaused={setIsPaused}
										/>
									)}
								</IndexProvider>
							))}
						</View>
					)}
				</OffsetYProvider> */}

					<View style={styles.postsContainer}>
						{homePosts?.map(({ id, title, image, description, updatedAt }) => (
							<HomePost
								key={id}
								title={title}
								image={image}
								description={description}
								updatedAt={updatedAt}
								offsetY={offsetY}
							/>
						))}
					</View>
				</View>
				<View style={{ height: 200 }} />
			</ScrollView>
		</Viewport.Tracker>
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
