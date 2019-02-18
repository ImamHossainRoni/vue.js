<template>
  <div id="app">
<navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="card" style="width: 18rem;">
            <img src="http://blog.imamhossainroni.me/admin/upload/5094622a13.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <ul class="list-group">
            <li class="list-group-item">
              Item-price
            </li>
            <li class="list-group-item">
              Item-price
            </li>
            <li class="list-group-item">
              Item-price
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import data from "./data.js"
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar

  },
  mounted() {
    console.log(data)
  }
}
</script>

<style>
</style>
