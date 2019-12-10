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

import chai from 'chai'

const expect = chai.expect;

// 单元测试

//测试icon值传入setting的时候，页面元素的class是否为#i-setting
{
    // 这里Button其实是个vue实例，是个对象，我们需要得是一个实例，使用Vue.extend可以获得Button得构造函数
    const Constructor = Vue.extend(Button);
    // 这里propsData主要用于测试,用于在使用new创建实例的时候传递props
    const button = new Constructor({
        propsData: {
            icon: 'setting',
        }
    });

    // vm.$mount用来手动挂载一个vue实例，上述button就是一个未挂载的vue实例，我们把它挂载到test上
    // 这里不写#test相当于先在文档外渲染，之后挂载也是可以的
    button.$mount();
    // 寻找button.$el找出vm对应的DOM元素，然后寻找其中的use元素
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    // 这里检查的结果是正确的，就不会报错，反之就会报错
    expect(href).to.equal('#i-setting');
    // 去掉button实例对应的DOM元素
    button.$el.remove();
    // 删除对应的vue实例
    button.$destroy();
}

// 测试同时传入icon: 'setting' 和loading: true的时候页面上是否只出现loading
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#i-loading');
    button.$el.remove();
    button.$destroy();
}

//测试默认的时候icon是否在左侧
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'setting',
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    try{
        expect(order).to.equal('1');
    }catch (e) {
        console.error(e);
    }finally {
        button.$el.remove();
        button.$destroy();
    }
}

// 测试传入iconPosition为right的时候图标是否在右侧(order是否是2)
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    try{
        expect(order).to.equal('2');
    }catch (e) {
        console.error(e);
    }finally {
        button.$el.remove();
        button.$destroy();
    }
}

//测试button的click事件是否生效，需要使用mock
{
    const Constructor = Vue.extend(Button);
    const wButton = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    });
    wButton.$mount();
    wButton.$on('click',function(){
        console.log(1);
    })
    console.log(wButton.$el);
    let button = wButton.$el;
    button.click();
}