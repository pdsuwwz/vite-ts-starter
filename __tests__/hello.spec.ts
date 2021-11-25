/**
 * @jest-environment jsdom
 */
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld/index.vue'

// https://stackoverflow.com/questions/56398742/eslint-throws-no-undef-errors-when-linting-jest-test-files
test('displays message', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
