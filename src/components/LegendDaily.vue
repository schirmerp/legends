<template>
    <div>
        <h1>Legend of the Day</h1>
        <img :src="source"/>
        <p>{{ description }}</p>
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LegendDaily',
    props: {
        source: String, 
        description: String,

    }
})
</script>