import DashboardPage from "../pages/dashboard/index.vue"
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import { setActivePinia, createPinia } from "pinia"



beforeAll(() => {
  setActivePinia(createPinia())
})



describe ('DashboardPage tests', () => {

  it('renders the DashboardPage component', async () => {
    await renderSuspended(DashboardPage)
    expect(screen.getByText('New card')).toBeDefined()

})
})