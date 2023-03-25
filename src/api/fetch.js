import axios from "axios";
const API_KEY = '33366333-0003f8d7ddc57df9984e9b7db'

axios.defaults.baseURL = `https://pixabay.com/api/`;

export async function ReturnFetch(searchValue, page){

		const fetchImage = await axios('', {
		  params: {
			key: API_KEY,
			page: page,
			image_type: 'photo',
			orientation: 'horizontal',
			per_page: 12,
			q: searchValue,
		  },
		});

		return fetchImage.data;
	  }
	  
// 	const response = await axios.get(
// 		`${BASE_URL}+${request}+${PROPERTIES}}`
// 	  );
// 	  	if(response.status === 200){
// 			return response.data.hits;
// 		} throw new Error(response.statusText);
// }
