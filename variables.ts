import { Dimensions } from 'react-native';

export const vw = Dimensions.get('screen').width / 100; // 390 for iPhone
export const vh = Dimensions.get('screen').height / 100; // 844 for iPhone

export const chekingCash = '1500.20';
export const savingsCash = '5000.20';
export const goodnessCash = '500.40';

export const summary = (
	Math.round((parseFloat(chekingCash) + parseFloat(savingsCash) + parseFloat(goodnessCash)) * 100) / 100
).toString();
