import SideNav from "../components/SideNav.vue"
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import App from '~/app.vue';


it('renders the app', async () => {
  await renderSuspended(App, { route: '/dashboard' })
  expect(screen.getByText('New card')).toBeDefined()
})


