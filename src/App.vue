<template>
  <div id="app">
    <Header></Header>
    <router-link to="/goods">商品</router-link>
    <router-link to="ratings">评论</router-link>
    <router-link to="/sellers">商家</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
	},
	data() {
		return {
			seller:{}
		}
	},

async created(){
			const  sellerData = await  axios.get("/seller")
			// console.log(seller);
			
      if(sellerData.data.errno === 0){
          this.seller = sellerData.data.data
      }
  }
};
</script>

