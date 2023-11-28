const {Country, Activity} = require ("../db");

const getCountryByNameController = async (name)=>{
    const countries = await Country.findAll({
        where: {name: {[Op.iLike]: `%${name}$%`}},
        include:{
        model: Activity,
        attributes:["name", "difficulty", "duration", "season"],
        through: {attributes: []},
      },
    });
    return countries
}

module.exports = getCountryByNameController;