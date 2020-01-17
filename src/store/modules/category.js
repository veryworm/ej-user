import {post_json, get, post} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        categories:[]
    },
    mutations: {
        LoadAllCategory(state,category){
            state.categories = category
        }
    },
    actions: {  
        async findAllCategory({commit}){
            let response = await get("category/findAll")
            commit("LoadAllCategory",response.data)
        }
    }
}