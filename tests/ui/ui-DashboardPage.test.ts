import DashboardPage from "../../pages/dashboard/index.vue"
import { it, expect, describe, test } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { setActivePinia, createPinia } from "pinia"


// last snap shot: 17/04

beforeAll(() => {
  setActivePinia(createPinia())
})


it('matches snapshot', async () => {
  const wrapper = await renderSuspended(DashboardPage)
  expect(wrapper).toMatchSnapshot()
})