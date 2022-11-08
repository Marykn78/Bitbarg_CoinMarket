import axios from "axios";

export const options =axios.create({
  method: 'GET',
  baseURL:'https://coinranking1.p.rapidapi.com',
//   url: '/coins',
  headers: {
    'X-RapidAPI-Key': 'd69acd1196msh73f7819ad6577b4p1d4145jsn5c807b2c1584',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
});

export const handlegetmodaldata =()=>{
  return options('/coins').then(data=>data.data?.data?.coins)    
}
