import {Dimensions} from 'react-native'

export const BASE_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';

export const Colors = {
  BLUE : '#4d8bd6',
  WHITE:'#FFFF',
  BLACK: '#121314',
  GRAY:'#ebebeb',
  LIGHT_GREEN:'#c3e3ac',
  SUCESS_GREEN:'#6b964d',
  LIGHT_BLUE:'#7e85c4'
}

export const images = [
  require('../assets/images/spacex1.png'),
  require('../assets/images/spacex2.png'),
  require('../assets/images/spacex3.png'),
  require('../assets/images/spacex4.png')
]

const {width,height} = Dimensions.get('window');

export function wp(percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
  }

 export function hp(percentage) {
    const value = (percentage * height) / 100;
    return Math.round(value);
  }

export const getQueryParams = (data) => {
  let string="";
 for (const [key, value] of Object.entries(data)) {
  if(value){
       string += `&${key}=${value}`
  }    
}
 return string;
}  