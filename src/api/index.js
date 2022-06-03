import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
export const getPlacesData = async (sw, ne) => {
    try {
      const options = {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
          limit: '30',
          currency: 'USD',
          subcategory: 'hotel,bb,specialty',
          adults: '1'
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': '13f221371dmsh779452dc18ca66ep1fd9f8jsn4f0e3a283991'
        }
      };
        const {data : { data }} = await axios.get(URL, options);
        return data;
    }
    catch (error){
        console.log("error")
    }
}