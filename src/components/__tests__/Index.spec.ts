import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LanguageSwitcher from '../LanguageSwitcher.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(LanguageSwitcher)
    console.log(wrapper)
  })
})
