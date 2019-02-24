<template>
    <div class="row">
      <div v-for="(item,index) in items" :key="index" class="card" style="width: 18rem;">
        <img :src="item.photo" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.price }}</p>
          <a @click="addToCart(item)" class="btn btn-primary" >+Add to cart</a>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        items:[]
      }
    },
    mounted(){
   this.fetchInventory()
    },
    methods:{
      addToCart(item){
        this.$emit("newItemAdded",item)
      },
      fetchInventory(){
        var self = this
        axios.get('http://localhost:3000/items').then(response=>{
          self.items = response.data
        })
      }
    }
  };
</script>

<style scoped>

</style>
