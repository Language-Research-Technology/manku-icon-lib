<script setup>
    import { defineAsyncComponent } from 'vue';

    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        size: {
        type: [String, Number],
        default: 24,
        },
        width: {
        type: [String, Number],
        default: '',
        },
        height: {
        type: [String, Number],
        default: '',
        },
        color: {
        type: String,
        default: '#737373',
        },
    })
    const icon = defineAsyncComponent(() => 
        import(`../assets/icons/${props.name}.svg`)
    )
</script>

<!-- Assigns the props to each Icon component -->
<template>
    <component :is="icon" :fill="props.color" :width="props.size" :height="props.size"/>
</template>