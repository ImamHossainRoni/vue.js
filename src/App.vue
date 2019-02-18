<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <inventory></inventory>
        </div>
        <div class="col-sm-3">
          <cart></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import data from "./data.js"
  import Navbar from "./components/Navbar";
  import Inventory from "./components/Inventory";
  import Cart from "./components/Cart";

  export default {
    name: 'App',
    components: {
      Inventory,
      Navbar,
      Cart
    },
    mounted() {
      console.log(data)
    }
  }
</script>

<style>
</style>
