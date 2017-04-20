<template>
<div class="container">
    <global-header title="test"></global-header>
    <global-footer></global-footer>
    <div class="infinite-container">
      <!--<charts :data="echartData"></charts>--> 
      {{total}}----------
      <button @click="clickref">call child</button>
      <test-child prop1="PROP1" :prop2="prop2" @add="add" @reduce="reduce" ref="child1">
        <div class="abc"> this is default slot ?? </div>
        <div class="ab" slot="eleP"> this is  slot eleP </div>
      </test-child>
      <test-child @add="add" @reduce="reduce"></test-child>
        <mu-icon-button tooltip="top-right" tooltipPosition="top-right" touch icon="grade"/>
        <mu-circular-progress></mu-circular-progress>
    </div>
  </div>
</template>

<script>
import GlobalFooter from '../components/Footer.vue'
import GlobalHeader from '../components/Header.vue'
import TestChild from '../components/__TestChild.vue'
// import Charts from '../components/Charts.vue'
export default {
  data () {
    return {
      list: [],
      title: 'TEST',
      total: 0,
      prop2: [
        {title: 'Caols', job: 'Engenior'},
        {title: 'Zhangwei', job: 'Engenior'},
        {title: 'Huhansan', job: 'Engenior'},
        {title: 'Liuling', job: 'Engenior'},
        {title: 'John', job: 'Engenior'}
      ]
      // echartData: {
      //   date: ['2015-06-05', '2019-06-07'],
      //   data1: [1, 3, 4, 5, 2, 9, 6],
      //   data2: [2, 6, 7],
      //   legend1: 'hello',
      //   legend2: 'world'
      // }
    }
  },
  methods: {
    clickref () {
      var child = this.$refs.child1
      child.age = 100
      child.add()
    },
    add (age) {
      this.total ++
      console.log(age)
    },
    reduce (age) {
      this.total --
      console.log(age)
    }
  },
  components: {
    GlobalFooter,
    GlobalHeader,
    TestChild
  }
}
</script>
