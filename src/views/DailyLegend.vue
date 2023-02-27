<template>
  <div class="home">
    <h1>Daily Legends</h1>
    <LegendDaily :source="source" :description="description"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LegendDaily from '@/components/LegendDaily.vue'

export default {
  name: 'DailyLegend',
  components: {
    LegendDaily
  },
  data(){
    return{
      source: 'https://cdn.theathletic.com/app/uploads/2022/11/16215255/GettyImages-1423198296-e1668653610687-1024x682.jpg',
      description: 'this are some words for people to read'
    }
  }
}
</script>
