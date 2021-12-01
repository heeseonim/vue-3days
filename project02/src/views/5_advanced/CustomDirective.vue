<template>
  <div>
    <div><input type="text" v-number /></div>
    <div><input type="text" v-focus /></div>
    <div><input type="text" v-float /></div>
  </div>
</template>
<script>
export default {
  name: '',
  directives: {
    // number: {
    //   mounted(el) {
    //     el.addEventListener('keydown', (e) => {
    //       if (!(e.keyCode >= 48 && e.keyCode <= 57)) {
    //         e.preventDefault()
    //       }
    //     })
    //   }
    // }
  },
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
