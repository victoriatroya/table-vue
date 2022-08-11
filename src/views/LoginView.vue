<template>
  <div class="login-page">
    <p class="title">Iniciar sesión</p>
    <form class="form-login">
      <div>
        <input
            v-model="data.email"
            class="input-email"
            type="text"
            placeholder="Correo"
            required>
      </div>
      <div>
        <input
            v-model="data.password"
            class="input-password"
            type="password"
            placeholder="Contraseña"
            required
        >
      </div>
      <div>
        <button class="button-form" @click="saveData()">
          Ingresar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "../router";

export default {
  data() {
    return  {
      data: {
        email: '',
        password: '',
      },
      redirectToDashboard: false,
    }
  },
  mounted() {
    if (localStorage.getItem('loginData')) {
      try {
        this.data = JSON.parse(localStorage.getItem('loginData'))
        router.push({ path: '/dashboard'})
      } catch (e) {
        localStorage.removeItem('loginData')
      }
    }
  },
  methods: {
   saveData () {
     if (this.data.email || this.data.password) {
       const parsed = JSON.stringify(this.data);
       localStorage.setItem('loginData', parsed);
       router.push({ name: 'dashboard'})
     }
   }
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  background-color: #e1dede;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 24px;
    color: #2c0707;
    margin: 0;
  }

  .form-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 35px;
    width: 300px;
    height: 100px;
    margin: 10px;

    .input-email, .input-password {
      border-width: 0 0 1px 0;
      border-color: #756969;
      outline: none;
      padding: 10px;
    }

    .button-form {
      background-color: transparent;
      border: 1px solid #756969;
      padding: 8px 20px;
      border-radius: 5px;
      margin-top: 10px;
    }
  }
}
</style>
