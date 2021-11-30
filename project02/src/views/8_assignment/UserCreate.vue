<template>
  <div>
    <h1>회원가입</h1>
    <p>계정 생성을 위해서 다음 정보를 작성해주세요</p>
    <h3>이름</h3>
    <input type="text" v-model="name" />
    <h3>이메일</h3>
    <input type="text" v-model="email" />
    <h3>비밀번호</h3>
    <input type="text" v-model="password" />
    <h3>비밀번호 확인</h3>
    <input type="text" v-model="passwordcheck" @keypress="checkPass" />
    <p style="color: red">{{ notice }}</p>
    <h3>전화번호</h3>
    <div>
      <input type="text" maxlength="3" v-model="tel1" v-move="[3, 'tel2']" />
      <input
        type="text"
        maxlength="4"
        v-model="tel2"
        id="tel2"
        v-move="[4, 'tel3']"
      />
      <input type="text" maxlength="4" id="tel3" v-model="tel3" />
    </div>
    <h3>성별</h3>
    <div>
      <label><input type="radio" value="M" v-model="sex" />남</label>
      <label><input type="radio" value="F" v-model="sex" />여</label>
    </div>
    <h3>관심사</h3>
    <div>
      <label
        ><input type="radio" value="AI" v-model="selected" />인공지능</label
      >
      <label
        ><input type="radio" value="BC" v-model="selected" />블록체인</label
      >
      <label><input type="radio" value="IOT" v-model="selected" />IoT</label>
      <label
        ><input type="radio" value="MB" v-model="selected" />메타버스</label
      >
    </div>
    <button @click="save">저장하기</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  directives: {
    move: {
      mounted(el, binding) {
        el.addEventListener('keyup', () => {
          if (el.value.length === binding.value[0]) {
            document.getElementById(binding.value[1]).focus()
          }
        })
      }
    }
  },
  data() {
    return {
      name: '',
      email: '',
      tel1: '',
      tel2: '',
      tel3: '',
      sex: '',
      selected: '',
      notice: '',
      password: '',
      passwordcheck: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkPass() {
      if (this.password !== this.passwordcheck) {
        this.notice = '비밀번호가 다릅니다.'
      } else {
        this.notice = ''
      }
    },
    save() {
      console.log(this.name, this.email, this.password)
      console.log(this.tel1, '-', this.tel2, '-', this.tel3)
      console.log(this.sex, this.selected)
    }
  }
}
</script>
