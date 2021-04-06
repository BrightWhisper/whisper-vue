<template>
  <svg>
    <use :xlink:href="`#w-${name}`"></use>
  </svg>
</template>
<script>
export default {
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
