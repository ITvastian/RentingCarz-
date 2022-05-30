const footballService = require ('../services/footballService');
const connection = require ('../services/connection.js');
const FixtureModel = require ('../models/fixture.models.js')



const getCompetitions = async (req, res) => {
    try {
        const competitionRes = await footballService.getCompetitions();
        console.log(`footballController -> getCompetitions ${competitionRes}`);
        res.status (200).json (competitionRes.data);
        await connection();
        const allFixture = await FixtureModel.find();
        console.log(allFixture);
        // console.log('connection ok');
    } catch (e){
        console.log(e);
    }
    
};


module.exports = {
    getCompetitions,
};