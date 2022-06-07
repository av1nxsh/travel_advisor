import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const options = {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                "X-RapidAPI-Key":
                    "13f221371dmsh779452dc18ca66ep1fd9f8jsn4f0e3a283991",
            },
        };
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            options
        );
        return data;
    } catch (error) {
        console.log("error");
    }
};
