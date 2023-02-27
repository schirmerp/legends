<template>
  <div class="about">
    <AllTime :legends="legends"/>
  </div>
</template>

<script>
import AllTime from '../components/AllTime.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LegendsPage',
  components: {
    AllTime
  },

})

</script>