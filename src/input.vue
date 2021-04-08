<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
           @change="$emit('change',$event.target.value)"
           @input="input"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           @compositionstart="compositionstart"
           @compositionend="compositionend"
    >
    <icon v-if="clearable" name="cancel" :class="
      [
          'icon',
          'icon-cancel',
          {
            'cancel-display': clearable&&valueFlag
          }
      ]"
          @click="clearInput"
    >
    </icon>
    <div v-if="error" class="errormessage">{{ error }}</div>
  </div>
</template>
<script>
import Icon from './icon';

export default {
  name: 'whisper-input',
  components: {
    icon: Icon
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data() {
    return {
      inputFlag: true
    };
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  computed: {
    valueFlag() {
      return this.value.length > 0;
    }
  },
  methods: {
    compositionstart() {
      this.inputFlag = false;
    },
    compositionend($event) {
      this.inputFlag = true;
      this.input($event);
    },
    input($event) {
      if (this.inputFlag) {
        this.$emit('input', $event.target.value);
      }
    },
    clearInput(){
      this.$emit('input', '');
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
$hover-color: #40a9ff;
$box-shadow-color: rgb(24 144 255 / 20%);
$box-shadow-color-red: rgb(245 34 45 / 20%);
$red: #ff4d4f;
.wrapper {
  height: $height;
  display: inline-block;
  font-size: $font-size;
  position: relative;

  &.error {
    > input {
      border-color: $red;

      &:hover {
        border-color: $red;
      }

      &:focus {
        border-color: $red;
        box-shadow: 0 0 0 2px $box-shadow-color-red;
      }
    }
  }

  > input {
    padding: 0 1.5em 0 8px;
    border-radius: 4px;
    height: inherit;
    font-size: inherit;
    outline: none;
    border: 1px solid $border-color;
    transition: .2s ease-in-out;

    &:hover {
      border: 1px solid $hover-color
    }

    &:focus {
      border: 1px solid $hover-color;
      box-shadow: 0 0 0 2px $box-shadow-color;
    }

    &[disabled] {
      border-color: $border-color;
      cursor: not-allowed;
      color: rgba(0, 0, 0, .25);
    }
  }

  //@keyframes errorDisplay {
  //  0% {
  //    transform:translate(0,-50%);
  //    opacity: (0);
  //  }
  //  100% {
  //    transform: translate(0);
  //    opacity:(1)
  //  }
  //}
  //
  //@keyframes errorHidden {
  //  0% {
  //    transform: translate(0);
  //    opacity:(1)
  //
  //  }
  //  100% {
  //    transform:translate(0,-50%);
  //    opacity: (0);
  //  }
  //}
  > .errormessage {
    position: absolute;
    color: red;
  }

  //> .errormessage.error-hidden {
  //  animation: errorHidden .2s ease-in-out forwards;
  //}
  //
  //> .errormessage.error-display {
  //  animation: errorDisplay .2s ease-in-out forwards;
  //}

  > .icon-cancel {
    transition: transform .2s ease-in-out;
    transform: scale(0);
    position: absolute;
    right: .5em;
    top: 9px;
  }

  > .cancel-display {
    transform: scale(1.1);
  }
}

</style>