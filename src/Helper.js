import axios from 'axios';

export const fetchData =  (len) => {
	const userURL = `https://randomuser.me/api/?results=${ len }&inc=name,gender,location,cell,dob,email,phone&noinfo`;

    return axios.get(userURL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};