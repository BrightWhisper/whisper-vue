<template>
  <button :class="
    [
        'w-button',
         `icon-${iconPosition}`,
          {
            disabled: disabled,
            [computedType]: !disabled
          }
      ]"
          @click="buttonClick">
    <w-icon v-if="loading && !disabled" class="icon loading" name="loading"></w-icon>
    <w-icon v-if="icon && !loading" class="icon" :name="icon"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import icon from './icon';

export default {
  name: 'whisper-button',
  components: {
    'w-icon': icon
  },
  props: {
    // 是否有图标
    icon: {},
    // 按钮的类型
    type: {
      type: String,
      default: 'default'
    },
    // 按钮的loading状态
    loading: {
      type: Boolean,
      default: false
    },
    // 按钮的位置
    iconPosition: {
      type: String,
      default: 'left'
    },
    // 按钮是否可交互
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedType() {
      return (this.type === 'primary' || this.type === 'danger') ? this.type : 'default';
    }
  },
  methods: {
    // 点击button时
    buttonClick() {
      if (this.disabled) {
        return;
      }
      this.$emit('click');
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$border-color: #d9d9d9;
$hover-color: #40a9ff;
$focus-color: #40a9ff;
$active-color: #096dd9;
$default-bg-color: #fff;
$default-color: #000;
$disabled-bg-color: #f5f5f5;
$disabled-color: rgba(0, 0, 0, .25);
$primary-bg-color: #1890ff;
$primary-border-color: #1890ff;
$primary-color: #fff;
$danger-bg-color: #ff4d4f;
$danger-border-color: rgb(217, 217, 217);
$danger-color: #fff;
$danger-active-color: #d9363e;

.w-button {
  @keyframes span {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  transition: .2s ease-in-out;

  &.default {
    background: $default-bg-color;
    border: 1px solid $border-color;
    color: $default-color;
  }

  &.default:focus {
    border: 1px solid $focus-color;
    color: $focus-color;
  }

  &.default:hover {
    border: 1px solid $hover-color;
    color: $hover-color;
  }

  &.default:active {
    opacity: 1;
    color: $active-color;
    border-color: $active-color;
  }

  &.primary {
    background: $primary-bg-color;
    border: 1px solid $primary-border-color;
    color: $primary-color;
  }

  &.danger {
    background: $danger-bg-color;
    border: 1px solid $danger-border-color;
    color: $danger-color;
  }

  &.primary:focus {
    opacity: 0.7;
  }

  &.primary:hover {
    opacity: 0.7;
  }

  &.primary:active {
    opacity: 1;
    background-color: $active-color;
  }

  &.danger:focus {
    opacity: 0.7;
  }

  &.danger:hover {
    opacity: 0.7;
  }

  &.danger:active {
    opacity: 1;
    background-color: $danger-active-color;
  }

  &.disabled {
    border: 1px solid $border-color;
    background-color: $disabled-bg-color;
    color: $disabled-color;
    cursor: not-allowed;
  }

  .icon {
    order: 1;
    margin-right: .3em;
    margin-left: 0;
  }

  .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-left: .3em;
    }

    > .content {
      order: 1;
    }
  }

  .loading {
    animation: span 1s infinite linear;
  }
}
</style>
