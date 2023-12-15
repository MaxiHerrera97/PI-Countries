const getActivitiesController = require ("../controllers/getActivitiesController");

const getAcvitiesHandler = async (req, res)=>{
    try {
       const allActivities = await getActivitiesController();
       if(!allActivities.length) throw new Error("Activities not available");
       res.status(200).json(allActivities);
    } catch (error) {
       res.status(400).json({error: error.message});
    }
}

module.exports = getAcvitiesHandler;