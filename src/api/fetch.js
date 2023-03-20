import axios from "axios";

const BASE_URL = `https://pixabay.com/api/?key=33366333-0003f8d7ddc57df9984e9b7db&q=`;
const PROPERTIES = `&image_type=photo&pretty=true+&per_page=40`;

export async function returnFetch(request){
	const response = await axios.get(
		`${BASE_URL}+${request}+${PROPERTIES}}`
	  );
	  	if(response.status === 200){
			return response.data.hits;
		} throw new Error(response.statusText);
}
