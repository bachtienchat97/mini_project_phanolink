<template>
  <div class="content">
    <div class="wrap-btn-form">
      <button
        class="login-form"
        :class="activeBtnLogin"
        @click="activeBtn('LOGIN')"
      >
        Login
      </button>
      <button
        class="register-form"
        :class="activeBtnRegister"
        @click="activeBtn('REGISTER')"
      >
        Register
      </button>
    </div>

    <Login v-if="isType === 'login'" />
    <Register v-if="isType === 'register'" :isType.sync="isType" />
  </div>
</template>

<script>
import Login from "@/views/pages/Login.vue";
import Register from "@/views/components/auth/Register.vue";

export default {
  name: "Modal",

  components: { Login, Register },

  data() {
    return {
      isType: "login",
    };
  },

  methods: {
    activeBtn(type) {
      switch (type) {
        case "LOGIN":
          this.isType = "login";
          break;

        case "REGISTER":
          this.isType = "register";
          break;

        default:
          return false;
      }
    },
  },

  computed: {
    activeBtnLogin() {
      return this.isType === "login" && "active";
    },
    activeBtnRegister() {
      return this.isType === "register" && "active";
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/styles";

.login-form,
.register-form {
  border: 1px solid $dark;
  color: $color-default-darker;
  background-color: $color-white;
}
.login-form::before {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  border-bottom: 5px solid $dark;
  border-left: 8px solid transparent;
}
.login-form {
  display: flex;
  background-color: $color-white;
  color: $color-default-lighter;
  border: 1px solid $color-default-darker;
  width: 160px;
  height: 55px;
  -khtml-transform: translateY(-4px);
  transform: translateY(-17px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: relative;
  &.active {
    background-color: $color-white;
    color: $color-primary;
    border: 1px solid $color-red;
    &.login-form::before {
      border-bottom: 5px solid $color-primary;
    }
  }
}

.register-form::before {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  border-bottom: 5px solid $dark;
  border-left: 8px solid transparent;
}

.register-form {
  display: flex;
  background-color: $color-white;
  color: $color-default-lighter;
  border: 1px solid $color-default-darker;
  width: 160px;
  height: 55px;
  margin-left: 10px;
  -khtml-transform: translateY(-4px);
  transform: translateY(-17px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: relative;

  &.active {
    background-color: $color-white;
    color: $color-primary;
    border: 1px solid $color-red;
    &.register-form::before {
      border-bottom: 5px solid $color-primary;
    }
  }
}

.content {
  position: relative;
  width: 40%;
  background-color: $color-white;
  transition: 0.3s;
  z-index: 1;
  margin: 20px auto;
  padding: 10px 40px 40px 40px;
  border-radius: 5px;
  border: 1px solid #0eb493;
  box-shadow: #8b6c6c33 0 2px 8px;
  animation: fadeOut 0.1s;

  .wrap-btn-form {
    display: flex;
    align-items: center;
    width: 60%;
    margin: 0 auto;
  }
}

@keyframes fadeOut {
  100% {
    opacity: 1;
    top: 35%;
  }
  0% {
    opacity: 0;
    top: 0%;
  }
}
</style>