<template>
  <div class="register">
    <form
      class="form-register"
      @submit.prevent="handleSubmit"
      v-if="isSuccess === false"
    >
      <div class="user-name">
        <label for="user-name">Họ tên</label>
        <input  class="input-text"
          name="user-name"
          type="text"
          placeholder="Nhập họ tên"
          v-model="userForm.name"
        />
      </div>

      <div class="email">
        <label for="email">Email</label>
        <input class="input-text"
          name="email"
          type="email"
          placeholder="Nhập Email"
          v-model="userForm.email"
        />
      </div>

      <div class="password">
        <label for="password">Mật khẩu</label>
        <input class="input-text"
          name="password"
          type="password"
          placeholder="Mật khẩu từ 6 đến 32 ký tự"
          v-model="userForm.password"
        />
      </div>

      <div class="phone">
        <label for="phone">Số điện thoại</label>
        <input class="input-text"
          name="phone"
          placeholder="Nhập số điện thoại"
          v-model="userForm.phone"
        />
      </div>
      <b-spinner small v-if="!isSubmit"></b-spinner>
      <button type="submit" class="btn-register">
        <span v-if="isSubmit"> Tạo tài khoản </span>
      </button>
    </form>

    <div class="register-success" v-if="isSuccess">
      <p class="register-text">
        Bạn Đã Đăng Ký Thành Công Với Email : <span>{{ accountRegister }}</span>
      </p>
      <button type="button" class="back-to-login" @click="backToLogin">
        Quay Trở Lại Đăng Nhập
      </button>
    </div>
  </div>
</template>

<script>
import httpClient from "@/utils/requestApis";

export default {
  name: "Register",

  props: {
    isType: { type: String, default: "" },
  },

  data() {
    return {
      userForm: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
      isSubmit: true,
      isSuccess: false,
      accountRegister: "",
    };
  },

  methods: {
    async handleSubmit() {
      this.isSubmit = false;
      try {
        const response = await httpClient.post("register", {
          name: this.userForm.name,
          email: this.userForm.email,
          password: this.userForm.password,
          phone: this.userForm.phone,
        });

        if (response.status === 200) {
          this.isSubmit = true;
          this.isSuccess = true;
          this.accountRegister = response.data.data?.email; // the sign "?" is optinal chaining
        }
      } catch (error) {
        this.isSubmit = true;
        console.error(error);
      }
    },

    backToLogin() {
      this.$emit("update:isType", "login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers/_variables";

[disabled] {
  cursor: no-drop;
  opacity: 0.5;
}

.form-register {
  width: 100%;

  .email,
  .phone,
  .password,
  .user-name {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;

    .input-text {
      padding: 5px 15px;
      margin-top: 5px;
    }
  }
}
.btn-register {
  width: 100%;
  border-radius: 5px;
  transition: 0.3s;
  height: 40px;
  font-weight: bold;
  color: $color-bg-white;
  font-size: $font-15;
  margin-top: 10px;
  background-color: $primary-green;
  outline: none;
  border: none;
  &:hover {
    opacity: 0.8;
  }
}

.register-success {
  padding: 15px;
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
  border: 1px solid $color-common;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
  margin-bottom: 10px;

  .register-text {
    border: 1px solid $color-common;
    padding: 5px;
    font-size: $size15;
    background-color: $color-white;
    span {
      font-weight: bold;
    }
  }

  .back-to-login {
    border: 1px solid $color-primary;
    padding: 5px;
    font-size: $size15;
    font-weight: bold;
    color: $color-primary;
    background-color: $color-white;
    &:hover {
      background-color: $color-btn;
    }
  }

  div {
    cursor: pointer;
    text-align: center;
    padding: $size15;
    border-radius: 5px;
    border: 1px solid grey;
    height: auto;
    font-weight: bold;
    color: $color-bg-white;
    margin-top: $size15;
    font-size: $font-15;
    background: #2a816f;
  }

  p {
    font-size: $font-15;
    span {
      color: #2a816f;
    }
  }
}
</style>
