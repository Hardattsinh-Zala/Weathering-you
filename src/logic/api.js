export const getData = async (city) => {
    const key = '4a65589337a1494aaa7154537251204';
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURIComponent(city)}`;

    try {
        const response = await fetch(url);
        if(response.status == 400) {
            return 400;
        }else {
            const result = await response.json();
            return result;
        }
    } catch (error) {
        console.log(error);
        return -1;
    }
}