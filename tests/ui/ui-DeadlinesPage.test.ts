import DeadlinesPage from "../../pages/deadlines/index.vue"
import { it, expect, describe, test } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'

// last snap shot: 17/04

it('matches snapshot', async () => {
  const wrapper = await renderSuspended(DeadlinesPage)
  expect(wrapper).toMatchSnapshot()
})