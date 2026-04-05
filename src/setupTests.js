jest.mock('dangerous-html/react', () => () => null, { virtual: true })

Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
})
