const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;


describe('input', () => {
  it('input组件存在', () => {
    expect(Input).to.exist;
  });

  describe('Input组件的props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$el.remove();
      vm.$destroy();
    });

    it('接收value', () => {
      vm = new Constructor({
        propsData: {
          value: '正常输入'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).eq('正常输入');
    });

    it('接收readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).eq(true);
    });

    it('接受disabled属性', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).eq(true);
    });

    it('接收placeholder', () => {
      vm = new Constructor({
        propsData: {
          placeholder: '默认输入'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.placeholder).eq('默认输入');
    });

    it('接收error', () => {
      vm = new Constructor({
        propsData: {
          error: '出错了'
        }
      }).$mount();
      const errorElement = vm.$el.querySelector('.errormessage');
      expect(errorElement.innerText).eq('出错了');
    });

    it('接收cancel', () => {
      vm = new Constructor({
        propsData: {
          error: '出错了'
        }
      }).$mount();
      const errorElement = vm.$el.querySelector('.errormessage');
      expect(errorElement.innerText).eq('出错了');
    });

    it('接收error', () => {
      vm = new Constructor({
        propsData: {
          error: '出错了'
        }
      }).$mount();
      const errorElement = vm.$el.querySelector('.errormessage');
      expect(errorElement.innerText).eq('出错了');
    });

    it('接收clearable', () => {
      vm = new Constructor({
        propsData: {
          clearable: true
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect(useElement.getAttribute('xlink:href')).eq('#w-cancel');
    });
  });

  describe('Input组件的事件', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(()=>{
      vm.$el.remove();
      vm.$destroy();
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change','input','blur','focus'].forEach((eventName)=>{
        vm = new Constructor().$mount();
        const callback = sinon.fake();
        vm.$on(eventName,callback);
        let event = new Event(eventName);
        Object.defineProperty(event,'target',{
          value: {value: 'hi'},
          enumerable: true
        })
        let inputElement = vm.$el.querySelector('input');
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith('hi');
      })
    });

    it('内部compositionstart和compositionstart事件控制inputFlag',()=>{
      vm = new Constructor().$mount();
      vm.compositionstart();
      expect(vm.$data.inputFlag).not.ok;
      let event = new Event('compositionend');
      Object.defineProperty(event,'target',{
        value: {value: 'mini'},
        enumerable: true
      })
      vm.compositionend(event);
      expect(vm.$data.inputFlag).ok;
    })
  });
});