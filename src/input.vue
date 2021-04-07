<template>
  <div class="wrapper">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
  </div>
</template>
<script>
import Icon from './icon';

export default {
  name: 'whisper-input',
  components: {
    icon: Icon
  },
  props: {
    value: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #d9d9d9;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgb(24 144 255 / 20%);
$red: #F1453D;
$hover-color: #40a9ff;
.wrapper {
  height: $height;
  display: inline-flex;
  font-size: $font-size;
  > input {
    padding: 0 8px;
    border-radius: 4px;
    height: inherit;
    font-size:inherit;
    outline: none;
    border: 1px solid $border-color;
    transition: .2s ease-in-out;
    &:hover{
      border: 1px solid $hover-color;
    }
    &:focus{
      border: 1px solid $hover-color;
      box-shadow: 0 0 0 2px $box-shadow-color;
    }
    &[disabled]{
      border-color: $border-color;
      cursor: not-allowed;
      color: rgba(0,0,0,.25);
    }
  }
}

</style>