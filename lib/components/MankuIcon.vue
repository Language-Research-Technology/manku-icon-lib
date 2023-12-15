<script setup>
import {defineAsyncComponent, inject, ref, reactive} from 'vue';

const notFound = inject('notFound', ref('Icon not found'));
const data = reactive({
  noIcon: false
});

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number]
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
const icon = defineAsyncComponent(() => {
      const name = props.name.toLowerCase();
      return import(`../assets/icons/${name}.svg`).then((i) => {
        return i;
      }, (error) => {
        //console.log(error);
        data.noIcon = true;
        return {};
      });
    }
);

</script>

<!-- Assigns the props to each Icon component -->
<template>
  <slot name="notFound" v-if="data.noIcon">
    {{ notFound }}
  </slot>
  <span v-else>
    <component v-if="props.size" :is="icon" :fill="props.color" :width="props.size" :height="props.size"/>
    <component v-else :is="icon" :fill="props.color" :width="props.width" :height="props.height"/>
  </span>

</template>