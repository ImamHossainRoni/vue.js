<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price float-right">Price</span>
    </li>
    <li v-for="(item,index) in items" :key="index" class="list-group-item">
      <span class="item-name">{{ item.title }}</span>
      <button class="btn btn-sm btn-danger" @click="removeItem(index)">-</button>
      <span class="item-price float-right">{{item.price}}</span>
    </li>
    <li class="list-group-item">
      <span class="item-name">Total</span>
      <span class="item-price float-right">{{totalPrice}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    methods:{
      removeItem(index){
        this.$store.commit('removeItem',index)
      }
    },
    computed:{
      items(){
        return this.$store.getters.getCart
      },
      totalPrice(item){
        var total = 0
        this.items.forEach(item=>{
          total +=parseFloat(item.price)
        });
        return total
      }
    }

  }
</script>

<style scoped>

</style>
