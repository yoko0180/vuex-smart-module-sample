import Vue from 'vue'
import * as Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import { foo } from './modules/foo'

Vue.use(Vuex)

// The 1st argument is root module.
// Vuex store options should be passed to the 2nd argument.
export const store = createStore(
  // Root module
  foo,

  // Vuex store options
  {
    strict: process.env.NODE_ENV !== 'production'
  }
)