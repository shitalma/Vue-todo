import Vue from 'vue'
import ToDo from '@/components/ToDo'

describe('ToDo.vue', () => {
  let vm
  beforeEach(() => {
    const Constructor = Vue.extend(ToDo)
    vm = new Constructor().$mount()
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('#app h1').textContent).toEqual('Welcome to Your TODO App')
  })

  it('should render list of todos', () => {
    expect(vm.$el.querySelector('#todos li').textContent.trim()).toEqual('random data')
  })
})
