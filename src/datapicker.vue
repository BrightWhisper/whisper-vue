<template>
  <div></div>
</template>

<script>
  export default {
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          // 属性检查器，必须是left或者right
          return value === 'left' || value === 'right';
        }
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
