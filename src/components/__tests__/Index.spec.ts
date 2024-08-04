import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import { describe, it, expect } from 'vitest'
import i18n from '@/util/i18n'
import Antd from 'ant-design-vue'
const routes = [
  { path: '/', component: MainHeader },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('MainHeader Component', () => {
  it('renders correctly', async () => {
    const wrapper = mount(MainHeader, {
      global: {
        plugins: [router, i18n, Antd],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
