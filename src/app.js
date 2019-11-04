import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('w-button', Button);
Vue.component('w-icon', Icon);
Vue.component('w-button-group', ButtonGroup);
new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})

import chai from 'chai';
const expect = chai.expect;
// 单元测试
{
    // 根据button组件生成一个构造函数
    const constructor = Vue.extend(Button);
    // 用这个构造函数创建一个实例
    const button = new constructor({
        propsData: {
            icon: 'setting'
        }
    });
    // 将这个实例挂载到test div上面
    button.$mount('#test');
    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting');
}
{
    // 根据button组件生成一个构造函数
    const constructor = Vue.extend(Button);
    // 用这个构造函数创建一个实例
    const button = new constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    });
    // 将这个实例挂载到test div上面
    button.$mount('#test');
    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading');
}