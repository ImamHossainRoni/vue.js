<template>
  <div id="app">
    <navbar @search="search"></navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <inventory @newItemAdded="addCartItem" :items="items"></inventory>
        </div>
        <div class="col-sm-3">
          <cart @newItemRemoved="removeCartItem" :items="carts"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import data from "./data.js";
  import Navbar from "./components/Navbar";
  import Inventory from "./components/Inventory";
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
      this.items = data;
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
