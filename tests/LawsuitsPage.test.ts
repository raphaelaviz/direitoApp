import LawsuitsPage from "../pages/lawsuits/index.vue"
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { fireEvent, screen } from '@testing-library/vue'
import { setActivePinia, createPinia } from "pinia"
import DataTableToolbar from "~/components/List/DataTableToolbar.vue"
import {within} from '@testing-library/dom'


beforeAll(() => {
  setActivePinia(createPinia())
  
})


describe ('LawsuitsPage tests', () => { 

  it('displays only lawsuits with LOW priority when "Low only" is enabled', async () => {
    await renderSuspended(LawsuitsPage);
    const facetedFilters = await screen.findByTestId('faceted2');
    const priorityFilter = within(facetedFilters).getByText('Priority')
    await fireEvent.click(priorityFilter)
    const lowFilter = await screen.findByText('Low only')
    await fireEvent.click(lowFilter)
    expect(screen.queryByText('Medium')).toBeNull();
    expect(screen.queryByText('High')).toBeNull();
    expect(screen.queryByText('Critic')).toBeNull();
  })

  it('displays only lawsuits with MEDIUM priority when "Medium only" is enabled', async () => {
    await renderSuspended(LawsuitsPage);
    const facetedFilters = await screen.findByTestId('faceted2');
    const priorityFilter = within(facetedFilters).getByText('Priority')
    await fireEvent.click(priorityFilter)
    const lowFilter = await screen.findByText('Medium only')
    await fireEvent.click(lowFilter)
    expect(screen.queryByText('Low')).toBeNull();
    expect(screen.queryByText('High')).toBeNull();
    expect(screen.queryByText('Critic')).toBeNull();
  })
  it('displays only lawsuits with HIGH priority when "High only" is enabled', async () => {
    await renderSuspended(LawsuitsPage);
    const facetedFilters = await screen.findByTestId('faceted2');
    const priorityFilter = within(facetedFilters).getByText('Priority')
    await fireEvent.click(priorityFilter)
    const lowFilter = await screen.findByText('High only')
    await fireEvent.click(lowFilter)
    expect(screen.queryByText('Low')).toBeNull();
    expect(screen.queryByText('Medium')).toBeNull();
    expect(screen.queryByText('Critic')).toBeNull();
  })
  it('displays only lawsuits with CRITIC priority when "Critic only" is enabled', async () => {
    await renderSuspended(LawsuitsPage);
    const facetedFilters = await screen.findByTestId('faceted2');
    const priorityFilter = within(facetedFilters).getByText('Priority')
    await fireEvent.click(priorityFilter)
    const lowFilter = await screen.findByText('Critic only')
    await fireEvent.click(lowFilter)
    expect(screen.queryByText('Low')).toBeNull();
    expect(screen.queryByText('Medium')).toBeNull();
    expect(screen.queryByText('High')).toBeNull();
  })

  it('opens sheet when "Add lawsuit" button is clicked', async () => {
    await renderSuspended(LawsuitsPage)
    await fireEvent.click(screen.getByText('Add lawsuit'))
    expect (screen.findByPlaceholderText('00.000.00')).toBeDefined()
   })
    

     })


