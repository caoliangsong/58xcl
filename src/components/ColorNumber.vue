<template>
  <span v-html="html">
  </span>
</template>
<script>
export default {
  name: 'color-number',
  data () {
    return {
    }
  },
  props: {
    num: {
      type: [Number, String],
      default: 0
    },
    percent: {
      type: [Boolean],
      default: true
    },
    color: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    html () {
      if (this.color) {
        if (this.percent) {
          return this.num >= 0 ? '<a>' + (this.num * 100).toFixed(2) + '%</a>' : '<a class="green">' + (this.num * 100).toFixed(2) + '%</a>'
        } else {
          return this.num >= 0 ? '<a>' + (this.num).toFixed(4) + '</a>' : '<a class="green">' + (this.num).toFixed(4) + '</a>'
        }
      } else {
        if (this.percent) {
          return (this.num * 100).toFixed(2) + '%'
        } else {
          return (this.num).toFixed(4)
        }
      }
    }
  }
  // methods: {
  //   handleClick (event) {
  //     this.$emit('click', event, this.percent)
  //   }
  // }
}
</script>
