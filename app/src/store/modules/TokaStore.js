
import { utilService } from '@/services/UtilService';
export const tokaStore = {
    state:{
        filterBy:null,
        users:[],
        cities:[],
        criteria:[]
    },
    getters:{
        usersToShow(state){
            const {filterBy} = state
            let filteredUsers = JSON.parse(JSON.stringify(state.users))
            if(filterBy?.criteria.length){
                filteredUsers = filteredUsers.filter(user=>{
                   return filterBy.criteria.some(cCriteria=>user.criteria === utilService.findStrNumber(cCriteria))  
                })
            }
            if(filterBy?.cities.length){
                filteredUsers = filteredUsers.filter(user=>{
                  return filterBy.cities.some(city=> utilService.findMatchLowerCase(user.city,city))  
                })
            }
            if(filterBy?.query){
                filteredUsers = filteredUsers.filter(user=>{
                    const userFullName = `${user.firstName} ${user.lastName}`
                   return utilService.findMatchLowerCase(userFullName,filterBy.query)
                })
            }
            return filteredUsers
        },
        users(state){
            return state.users
        },
        cities(state){
            return state.cities
        },
        criteria(state){
            return state.criteria
        },
        filterBy(state){
            return state.filterBy
        }

    },
    mutations:{
        setData(state,{data}){
            const {users,cities,criteria} = data
            state.users = users
            state.cities = cities
            state.criteria = criteria
            
        },
        setFilterBy(state,{filterBy}){
            state.filterBy = filterBy
        }
    },
    actions:{
   
    }
}