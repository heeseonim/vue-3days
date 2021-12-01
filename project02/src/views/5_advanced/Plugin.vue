<template>
  <div>
    <h1>{{ $translate('ko.hi', user) }}</h1>
    <h1>{{ $translate('en.hi') }}</h1>
    <button>{{ $translate('ko.search') }}</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      user: { name: '승원', phone: '010-0000-0000' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
