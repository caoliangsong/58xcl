<template>
  <div>
    <input v-model="age" >
    <button @click="add">add</button>
    <button @click="reduce"> -- </button>
    <hr />
    {{data1}}--{{prop1}}
    <hr />
    <div v-for="item in prop2">
      {{item.title}} -- {{item.job}} 
    </div>
    <hr />
    <p>
      <slot></slot>
      <slot name="eleP"></slot>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data1: 'seeking',
      age: 0
    }
  },
  props: {
    prop1: [String, Number],
    prop2: [Object, Array],
    prop3: [Array]
  },
  methods: {
    add () {
      this.age ++
      this.$emit('add', this.age)
    },
    reduce () {
      this.age --
      this.$emit('reduce', this.age)
    }
  }
}
</script>
