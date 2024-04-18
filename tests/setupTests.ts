import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'

const lawsuits = [
  {
    id: 126,
    number: "84.2008.563.0039",
    plaintiff: "Miles Anderson",
    defendant: "Penelope Wilson",
    status: "Waiting for X",
    priority: "High",
    favorite: null,
    createdAt: "16/04/2024 14:00:59"
  },
  // ...
]

export const restHandlers = [
  http.get('/api/lawsuits', () => {
    return HttpResponse.json(lawsuits)
  }),
]

const server = setupServer(...restHandlers )

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())