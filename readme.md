# Create vuex entities names without headache
[![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]

```bash
npm i create-vuex-entities
```

If you shot your leg with naming of mutations, or actions, or getters -- this module can solve this problem!

```js
import { createMutations } from 'create-vuex-entities'
const PREFIX = 'counter'
const mutations = createMutations(PREFIX, [
  'increment',
  'decrement'
])
const counter = {
  mutations: {
    [mutations.increment]: (state) => state.score + 1,
    [mutations.decrement]: (state) => state.score - 1
  }
}
export { mutations }
```

That's it! Now we have unique mutations and can use they anywhere without troubles.

```js
import { mapMutations } from 'vuex'
import { mutations } from 'path/to/counter/module'

export default {
  name: 'Counter',
  methods: {
    increment () {
      this.$store.commit(mutations.increment)
    },
    decrement () {
      this.$store.commit(mutations.decrement)
    }
  }
}
```

`mutations.increment` equals to `couter/mutation/increment`
and `mutations.decrement` to `couter/mutation/decrement`.

You also can create `getters` by `createGetters`, `actions` by `createActions`,
`modules` by `createModules`.

## Creating of custom entities

If you want to create custom entities names, you should use `createEntities`.

```js
import { createEntities } from 'create-vuex-entities'

const PREFIX = 'test'
const TYPE = 'custom'
const customEntitiesList = createEntities(TYPE, PREFIX, [
  'foo',
  'bar'
])
```

It'll create `test/custom/foo` and `test/custom/bar`. You also can create basic
types of entities with this function.

## But why? There is exist `namespaced` property

`namespaced` makes modules isolated, but not this package. Other modules can
work with each other.

When I tried to use `namespaced` property for store modules I spent many time
for searching name of mutation/action that I need. That's not cool :crying_cat_face:

In the other case I used this package and export mutations names in file that I
need. All troubles were resolved and I was not wasted my time for manually writing names. That's very cool :smirk_cat:

[travis-image]: https://travis-ci.org/lamartire/create-vuex-entities.svg?branch=master
[travis-url]: https://travis-ci.org/lamartire/create-vuex-entities
[npm-image]: https://badge.fury.io/js/create-vuex-entities.svg
[npm-url]: https://npmjs.org/package/create-vuex-entities
