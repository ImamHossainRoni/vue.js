<template>
<div v-if="item" class="row">
  <div class="col-sm-6">
    <img :src="item.photo" alt="">
  </div>
  <div class="col-sm-6">
    <h4>{{ item.title }}</h4>
    <p style="color: #cd5c5c;">Price : {{ item.price }}</p>
    <p>{{ item.description }}</p>
    <div class="card-footer">
      <a @click="addToCart(item)" class="btn btn-primary" >+Add to cart</a>
    </div>
  </div>
</div>
  <div v-else>
    <h1>Data is loading......</h1>
  </div>

</template>

<script>
  import axios  from 'axios'
    export default {

        name: "ItemDetails",
      data(){
          return{
            item:null
          }
      },
      mounted(){
      this.fetchItem()
      },
      methods:{
          fetchItem(){
            var self = this
            axios.get('http://localhost:3000/item/'+ this.$route.params.id).then(response=>{
              self.item =  response.data
            })

          },
        addToCart(item){
          console.log("Commit");
          this.$store.commit('addToCart',item)
        }
      }
    }
</script>

<style scoped>

</style>
