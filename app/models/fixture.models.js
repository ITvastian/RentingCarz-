const mongoose = require ('mongoose');

const {Schema} = mongoose;


const FixtureSchema = new Schema({
    name: String
})

const FixtureModel = mongoose.model ('Fixture', FixtureSchema);

module.exports = FixtureModel;