<template>
  <div>
    <button @click="increaseCounter">Add 1</button>
    <p>The counter is : {{ counter }}</p>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      counter: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increaseCounter() {
      this.counter += 1 // 안에 있는 원소에 접근한다면, this 키워드 필수!
    }
  }
}
</script>
