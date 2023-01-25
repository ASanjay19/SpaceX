import {BASE_URL, getQueryParams} from '../common/constants'

export const Api= async (obj)=>{
    console.log('obj',obj)
    let data  = getQueryParams(obj);
    console.log('Querydata',data)
    try {
        const response = await fetch(BASE_URL+ data);
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
        return null
      }
}
