<template>
    <div>
        <div>
        <h1>All Time Legends</h1>
        </div>
        <div v-for="legend in legends" :key="legend.id">
            <div>
                <h1>{{ legend.name }}</h1>
                <img :src="legend.img"/>
                <p>{{ legend.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import allLegends from '@/assets/legendData.js'

export default defineComponent({
    name: 'AllTime',
    setup(){
        const legends = ref(allLegends)
        return { legends }
    }
})
</script>