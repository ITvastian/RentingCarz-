const axios = require('axios');
const { post } = require('../router');

const service = {
    getCompetitions: async () => {
        const response = await axios.get(`https://api.football-data.org/v4/competitions/CL/matches`,{"headers" :{"X-Auth-Token" : process.env.API_TOKEN}});
        console.log(response);
        return response;
     } 
}

module.exports = service;



// var Xmas95 = new Date(' 05,29,1995');
//         var day = Xmas95.getDate();

