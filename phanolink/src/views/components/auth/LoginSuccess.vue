<template>
<div>
    <span v-if="!data">Tài khoản</span>
    <span v-if="data">{{ data.name }}</span>
</div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'LoginSuccess',

   data() {
       return {
          user: null
       }
   },
   
   
   async created() {
       const response = await axios.get('data');
       console.log(response, 'response');

       this.user = response.data;

   }
}
</script>

<style>

</style>