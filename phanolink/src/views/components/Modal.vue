<template>
  <div id="modal-1">
    <div class="content" id="content">
      <div class="wrap-form">
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
  </div>
</template>

<script>
import Login from "@/views/components/auth/Login.vue";
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

.login-form {
  &.active {
    background-color: $color-white;
    color: $color-primary;
    border: 1px solid $color-red;
  }
}

.register-form {
  &.active {
    background-color: $color-white;
    color: $color-primary;
    border: 1px solid $color-red;
  }
}
#modal-1 {
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: none;
  position: fixed;
  overflow: hidden;
  left: 0;
  top: 0;
  z-index: 999;
  animation: fade 1s linear;

  .content {
    background-color: $color-white;
    left: 50%;
    transition: 0.3s;
    top: 43%;
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 38%;
    padding: 70px 40px 40px 40px;
    border-radius: 5px;
    border: 1px solid #0eb493;
    box-shadow: #8b6c6c33 0 2px 8px;
    animation: fadeOut 0.1s;
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