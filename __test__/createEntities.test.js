const createVuexEntities = require('./../dist/index')
const PREFIX = 'test'

test('Creates mutations with PREFIX "test"', () => {
  const expectedMutationsList = {
    test1: 'test/mutation/test1',
    test2: 'test/mutation/test2'
  }
  const mutations = createVuexEntities.createMutations(PREFIX, [
    'test1',
    'test2'
  ])
  expect(mutations).toEqual(expectedMutationsList)
})
test('Creates actions with PREFIX "test"', () => {
  const expectedActionsList = {
    test1: 'test/action/test1',
    test2: 'test/action/test2'
  }
  const actions = createVuexEntities.createActions(PREFIX, [
    'test1',
    'test2'
  ])
  expect(actions).toEqual(expectedActionsList)
})
test('Creates getters with PREFIX "test"', () => {
  const expectedGettersList = {
    test1: 'test/getter/test1',
    test2: 'test/getter/test2'
  }
  const getters = createVuexEntities.createGetters(PREFIX, [
    'test1',
    'test2'
  ])
  expect(getters).toEqual(expectedGettersList)
})
test('Creates modules with PREFIX "test"', () => {
  const expectedModulesList = {
    test1: 'test/module/test1',
    test2: 'test/module/test2'
  }
  const modules = createVuexEntities.createModules(PREFIX, [
    'test1',
    'test2'
  ])
  expect(modules).toEqual(expectedModulesList)
})
