/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import IconFontComponent from '@/components/IconFont/index.vue'

describe('Test IconFontComponent', () => {
  it('works', () => {
    const wrapper = mount(IconFontComponent, {
      props: {
        icon: 'iconfile'
      }
    })

    expect(wrapper.find('g').find('use').attributes('href')).toBe('#iconfile')
  })

  it('empty IconFontComponent', () => {
    const wrapper = mount(IconFontComponent, {
      props: {
        icon: ''
      }
    })

    expect(wrapper.find('g').find('use').attributes('href')).toBe('#')
  })

  it('the position of icon is vertically centered', () => {
    const wrapper = mount(IconFontComponent, {
      props: {
        icon: 'iconfile',
        verticalCenter: true
      }
    })

    expect(wrapper.classes()).toContain('middle')
  })

  it('cursor pointer', () => {
    const wrapper = mount(IconFontComponent, {
      props: {
        icon: 'iconfile',
        cursor: true
      }
    })

    expect(wrapper.classes()).toContain('cursor')
  })

  it('handle handleClick', () => {
    const wrapper = mount(IconFontComponent, {
      props: {
        icon: 'iconfile',
        disabled: false
      }
    })

    wrapper.vm.handleClick()
    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('does not handle handleClick', () => {
    const wrapper = mount(IconFontComponent, {
      props: {
        icon: 'iconfile',
        disabled: true
      }
    })

    wrapper.vm.handleClick()
    expect(wrapper.emitted().click).toBeUndefined()
  })

  it('has shadow', () => {
    const wrapper = mount(IconFontComponent, {
      props: {
        icon: 'iconfile',
        shadow: true
      }
    })

    expect(wrapper.find('g').attributes('filter')).toBeTruthy()
  })
})
