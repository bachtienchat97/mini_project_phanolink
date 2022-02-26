<template>
  <b-modal id="modal-1" hide-footer>
    <div class="wrap-form">
      <button
        class="login-form"
        :class="activeClassLogin"
        v-b-modal.modal-1
        @click="activeBtn('LOGIN')"
      >
        Login
      </button>
      <button
        class="register-form"
        :class="activeClassRegister"
        v-b-modal.modal-1
        @click="activeBtn('REGISTER')"
      >
        Register
      </button>
    </div>
    <Login v-if="isType === 'login'" />
    <Register v-if="isType === 'register'" v-model="isType" />
    <!-- <RegisterSuccess /> -->

    <pre>{{ isType }}</pre>
  </b-modal>
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
    activeClassLogin() {
      return this.isType === "login" && "active";
    },
    activeClassRegister() {
      return this.isType === "register" && "active";
    },
  },
};
</script>

<style scoped lang="scss">
.login-form {
  &.active {
    background: blue;
  }
}

.register-form {
  &.active {
    background: blue;
  }
}
</style>