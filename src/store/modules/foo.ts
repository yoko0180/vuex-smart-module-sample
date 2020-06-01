// Import base classes
import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

// State
class FooState {
  count = 1
}

// Getters
// Extend 'Getters' class with 'FooState' type
class FooGetters extends Getters<FooState> {
  // You can declare both getter properties or methods
  get double() {
    // Getters instance has 'state' property
    return this.state.count * 2
  }

  get triple() {
    // When you want to use another getter, there is `getters` property
    return this.getters.double + this.state.count
  }
}

// Mutations
// Extend 'Mutations' class with 'FooState' type
class FooMutations extends Mutations<FooState> {
  increment(payload: number) {
    // Mutations instance has 'state' property.
    // You update 'this.state' by mutating it.
    this.state.count += payload
  }
}

// Actions
// Extend 'Actions' class with other module asset types
// Note that you need to specify self action type (FooActions) as a type parameter explicitly
class FooActions extends Actions<
  FooState,
  FooGetters,
  FooMutations,
  FooActions
> {
  incrementAsync(payload: { amount: number; interval: number }) {
    // Actions instance has 'state', 'getters', 'commit' and 'dispatch' properties

    return new Promise(resolve => {
      setTimeout(() => {
        this.commit('increment', payload.amount)
        resolve()
      }, payload.interval)
    })
  }
}

// Create a module with module asset classes
export const foo = new Module({
  state: FooState,
  getters: FooGetters,
  mutations: FooMutations,
  actions: FooActions
})