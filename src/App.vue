<template>
  <div id="app">
    <!--<router-link :to="{path:'/'}">Home</router-link>-->
    <!--<router-link :to="{path:'/test/1'}">test-1</router-link>-->
    <!--<router-link :to="{path:'/test/2'}">test-2</router-link>-->
    <!--<router-link :to="{path:'/test/3'}">test-3</router-link>-->
    <navbar @search="search"></navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view @newItemAdded="addCartItem" :items="items"></router-view>
        </div>
        <div class="col-sm-3">
          <cart @newItemRemoved="removeCartItem" :items="carts"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from "./data.js";
  import Navbar from "./components/Navbar";
  import Inventory from "./components/views/Inventory";
  import Cart from "./components/Cart";

  export default {
    components: {
      Navbar,
      Cart,
      Inventory
    },
    data() {
      return {
        items: [],
        carts: []
      };
    },
    mounted() {
      // this.items = data;
      // console.log(data);
    },
    methods: {
      search(keyword){
    this.items =data.filter(item =>{
      return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })
      },
      addCartItem(item) {
        this.carts.push(item);
        console.log(this.carts)
      },
      removeCartItem(index){
        this.carts.splice(index,1)
      }
    }
  };
</script>

<style>
</style>
