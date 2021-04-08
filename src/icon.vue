<template>
  <svg @click="$emit('click')">
    <use :xlink:href="`#w-${name}`"></use>
  </svg>
</template>
<script>
import './svg.js'
export default {
  name: 'whisper-icon',
  props: ['name']
};
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>
