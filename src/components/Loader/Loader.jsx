import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
	return (
	  <ThreeCircles 
		height="300"
		width="300"
		color='#007bff'
		wrapperStyle={{}}
		wrapperClass="three-wrapper"
		visible={true}
		ariaLabel="three-circles-rotating"
	  />
	);
  };
  
