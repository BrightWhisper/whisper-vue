const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/button';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.exist;
  });

  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount();
    const useElement = vm.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.equal('#w-setting');
    vm.$destroy();
  });

  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        loading: true
      }
    }).$mount();
    const useElements = vm.$el.querySelectorAll('use');
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#w-loading');
    vm.$destroy();
  });
  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount(div);
    const icon = vm.$el.querySelector('svg');
    expect(getComputedStyle(icon).order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
  });
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        iconPosition: 'right'
      }
    }).$mount(div);
    const icon = vm.$el.querySelector('svg');
    expect(getComputedStyle(icon).order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
  });

  it('可以设置type,默认样式是default', () => {
    const Constructor = Vue.extend(Button);
    const vmDefault = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount();
    const vmPrimary = new Constructor({
      propsData: {
        icon: 'setting',
        type: 'primary'
      }
    }).$mount();
    const vmDanger = new Constructor({
      propsData: {
        icon: 'setting',
        type: 'danger'
      }
    }).$mount();
    const vmFault = new Constructor({
      propsData: {
        icon: 'setting',
        type: 'dang'
      }
    }).$mount();
    expect(vmDefault.$el.classList.contains('default')).to.be.true;
    expect(vmPrimary.$el.classList.contains('primary')).to.be.true;
    expect(vmDanger.$el.classList.contains('danger')).to.be.true;
    expect(vmFault.$el.classList.contains('dang')).to.be.false;
    expect(vmFault.$el.classList.contains('default')).to.be.true;
    vmDefault.$el.remove();
    vmDefault.$destroy();
    vmPrimary.$el.remove();
    vmPrimary.$destroy();
    vmDanger.$el.remove();
    vmDanger.$destroy();
    vmFault.$el.remove();
    vmFault.$destroy();
  });

  it('可以设置disabled，且设置disabled时候type属性无效', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        disabled: true,
        type: 'danger'
      }
    }).$mount();
    const button = vm.$el;
    expect(button.classList.contains('disabled')).to.be.true;
    expect(button.classList.contains('default')).to.be.false;
    expect(button.classList.contains('danger')).to.be.false;
    vm.$destroy();
  });

  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount();
    const callback = sinon.fake();
    vm.$on('click', callback);
    vm.$el.click();
    expect(callback).to.called;
  });
});
