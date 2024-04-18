import SideNav from "../components/SideNav.vue"
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'


it('renders the SideNav component', async () => {
  await renderSuspended(SideNav)
  expect(screen.getByText('JurisDash')).toBeDefined()
})