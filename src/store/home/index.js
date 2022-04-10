import { reqCategoryList } from "@/api";
//home模块的仓库
const state = {
   categoryList:[]
};
const mutations = {
   CategoryList(state,categoryList){
      state.categoryList=categoryList
   }
};
const actions={
   async categoryList({commit}){
      //通过API向服务器发起请求，获取数据
      let result = await reqCategoryList();
      console.log(result);
      if(result.code==200){
         commit("CategoryList",result.data)

      }
   }
};
const  getters ={

};
export default {
   state,
   mutations,
   actions,
   getters
}