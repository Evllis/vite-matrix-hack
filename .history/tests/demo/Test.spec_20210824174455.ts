import { mount } from '@vue/test-utils'
import Home from '@/pages/Home.vue'

test('Home.vue', async () => {
    const wrapper = mount(Home)
    expect(wrapper.html()).toContain('Unit Home Page')
    expect(wrapper.html()).toContain('count is: 0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('count is: 1')
})