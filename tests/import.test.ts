import { describe,  test, expect } from 'vitest'


describe('import vue components', () => {
    test('normal imports as expected', async () => {
      const component = await import('../components/SideNav.vue')
      expect(component).toBeDefined()
    })
  
    test('template string imports as expected', async () => {
      const component = await import(`../components/SideNav.vue`)
      expect(component).toBeDefined()
    })
  
    test('dynamic imports as expected', async () => {
      const name = 'SideNav'
      const component = await import(`../components/${name}.vue`)
      expect(component).toBeDefined()
    })
  })