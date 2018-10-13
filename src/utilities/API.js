import axios from 'axios';

const url = 'http://localhost:8080/search'
const key = '?key=6152de828cbb983db14ca8d3ed12f1a9'
const format = '&format=json'

export default {
  randompet: function(){
    return axios.get(url)
  }
}
