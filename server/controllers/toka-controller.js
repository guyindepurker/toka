const tokaService = require('../services/toka-service')
async function getData(){
    try{
        const data = tokaService.query()
        return data
    } catch(err){
        throw err
    }
}
module.exports={getData}