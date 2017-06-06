<template>
  <div class="container">
        <div class="row text-center">
            <h3>Clicked: {{$store.state.count}} times, <br> counter is {{evenOrOdd}}</h3>     
            <button class="btn btn-success" @click='increment2'>+</button>
            <button class="btn btn-danger" @click='decrement2'>-</button>
            
            <button class="btn" @click='incrementIfOdd'>Increment if odd</button>
            <button class="btn" @click='incrementAsync'>Increment asynchronously</button>
        </div>    
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'hello',
    computed: {
        ...mapGetters(['evenOrOdd'])
    },
    methods: {
        ...mapActions([
            'increment2',
            'decrement2',
            'incrementIfOdd', 
            'incrementAsync'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  {
    border: 1px solid black;
 }
</style>
