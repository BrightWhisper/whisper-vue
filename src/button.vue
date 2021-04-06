<template>
  <button :class="
    [
        'w-button',
         `icon-${iconPosition}`,
          {
            disabled: disabled,
            [type]: !disabled
          }

      ]
    "
          ref="w-button"
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
.w-button {
  @keyframes span {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid #999;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  transition:.2s ease-in-out;

  &.default {
    background: #fff;
    border: 1px solid rgb(217, 217, 217);
    color: #000;
  }

  &.default:focus {
    border: 1px solid #40a9ff;
    color: #40a9ff;
  }

  &.default:hover {
    border: 1px solid #40a9ff;
    color: #40a9ff;
  }

  &.default:active {
    opacity: 1;
    color: #096dd9;
    border-color: #096dd9
  }

  &.disabled {
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, .25);
    cursor: not-allowed;
  }

  &.primary {
    background: var(--primary-color);
    border: 1px solid var(--primary-color);
    color: #fff;
  }

  &.danger {
    background: #ff4d4f;
    border: 1px solid rgb(217, 217, 217);
    color: #fff;
  }

  &.primary:focus {
    opacity: 0.7;
  }

  &.primary:hover {
    opacity: 0.7;
  }

  &.primary:active {
    opacity: 1;
    background-color: #096dd9;
  }

  &.danger:focus {
    opacity: 0.7;
  }

  &.danger:hover {
    opacity: 0.7;
  }

  &.danger:active {
    opacity: 1;
    background-color: #d9363e;
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
