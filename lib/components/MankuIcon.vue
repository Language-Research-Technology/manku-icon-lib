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
const icon = defineAsyncComponent(() => {
      return import(`../assets/icons/${props.name}.svg`).then((i) => {
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
  <component v-else :is="icon" :fill="props.color" :width="props.size" :height="props.size"/>
</template>