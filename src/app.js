import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import DataPicker from './datapicker';
import Input from './input';

Vue.component('w-button', Button);
Vue.component('w-icon', Icon);
Vue.component('w-button-group', ButtonGroup);
Vue.component('w-picker', DataPicker);
Vue.component('w-input', Input);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    input1: '正常',
    input2: '只读',
    input3: '不可输入',
    input4: '',
    input5: '',
    input4Error: '都说了不能超过俩字儿'
  },
  methods: {

    changeEvent(e) {
      console.log('change');
      console.log(e.target.value);
    },
    inputEvent(e) {
      console.log('input');
      console.log(e.target.value);
    },
    focusEvent(e) {
      console.log('focus');
      console.log(e.target.value);
    },
    blurEvent(e) {
      console.log('blur');
      console.log(e.target.value);
    }
  }
});
