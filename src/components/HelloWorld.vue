<template>
  <div class="hello">
    <h1>count:{{ count }}</h1>
    <button @click="inc">inc</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { foo } from '@/store/modules/foo'
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  store = foo.context(this.$store)

  get count(){
    return this.store.state.count
  }

  inc () {
    this.store.actions.incrementAsync({amount:3, interval:1000})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  width: 100px;
  height: 100px;
}
</style>
