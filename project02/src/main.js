import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixin'
import i18nPlugin from './plugins/i18n'
import i18nStrings from './i18n/default'
// import formatter from './mixin/formatter.js'

// createApp(App).use(store).use(router).mount('#app')
// import './assets/css/style.css' // 전체 스타일 적용
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixin)
// app.mixin(formatter)
app.use(i18nPlugin, i18nStrings)
app.use(VueSweetalert2)

app.directive('focus', {
  // 모든 컴포넌트에서 공통으로 사용
  mounted(el) {
    el.focus()
  }
})

app.directive('number', {
  mounted(el) {
    el.addEventListener('keydown', (e) => {
      if (
        !(e.keyCode >= 48 && e.keyCode <= 57) ||
        e.keyCode === 8 ||
        e.keycode === 46 ||
        e.keyCode === 37 ||
        e.keyCode === 39
      ) {
        e.preventDefault() // 숫자만 입력가능 8 46 37 39
      }
    })
  }
})

app.directive('float', {
  mounted(el) {
    el.addEventListener('keydown', (e) => {
      if (
        !(
          (e.keyCode >= 48 && e.keyCode <= 57) ||
          e.keyCode === 110 ||
          e.keyCode === 190 ||
          e.keyCode === 8 ||
          e.keycode === 46 ||
          e.keyCode === 37 ||
          e.keyCode === 39
        )
      ) {
        e.preventDefault() // 숫자만 입력가능 8 46 37 39
      }
    })
  }
})

app.mount('#app')
