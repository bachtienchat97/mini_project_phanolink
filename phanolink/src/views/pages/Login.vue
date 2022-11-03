<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <div class="error" v-if="isCorrectUser">
        <img src="@/assets/img/error-icon.png" alt="error-icon" />
        <p>Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại</p>
      </div>

      <label for="email">Email / SĐT</label>
      <div class="account">
        <input
          id="email"
          name="email"
          type="text"
          class="input-text"
          placeholder="Nhập email hoặc số điện thoại"
          v-model="formSubmit.email"
        />
      </div>

      <label for="password">Mật khẩu</label>
      <div class="password-wrap">
        <input
          id="password"
          name="password"
          class="input-text"
          type="password"
          placeholder="Mật khẩu từ 6 đến 32 ký tự"
          v-model="formSubmit.password"
        />

        <div class="wrap-btn">
          <div class="toggle-password" v-if="isDisplay" @click="hidePassword">
            <img src="@/assets/img/icon-closed-eye.png" alt="icon-closed-eye" />
          </div>

          <div class="toggle-password" v-else @click="displayPassword">
            <img src="@/assets/img/icon-uchiha-eye.png" alt="icon-uchiha-eye" />
          </div>
        </div>
      </div>

      <p>Quên mật khẩu? Nhấn vào <a href="#" class="forget-pass">đây</a></p>

      <label class="remember">
        <input
          type="checkbox"
          name="remember"
          value="isRemember"
          id="remember"
        />
        Ghi nhớ tài khoản của tôi
      </label>
      <button type="submit" class="btn-login" @click="handleSubmit()">
        <b-spinner small v-if="!isSpinner"></b-spinner>
        <span v-if="isSpinner">Đăng nhập</span>
      </button>
    </form>
  </div>
</template>

<script>
import httpClient from "@/utils/requestApis";

import { mapGetters } from "vuex";
import Nprogress from 'nprogress';

import { KEY_LOCAL_STORAGE } from "@/constants";

export default {
  name: "Login",
  data() {
    return {
      formSubmit: {
        email: "",
        password: "",
      },
      errMSG: "",
      isCorrectUser: false,
      isDisplay: true,
      isSpinner: true,
    };
  },

  computed: {
    ...mapGetters({
      productDetailByID: "product/productDetailByID",
      isAuthen: "auth/isAuthen",
    }),
  },

  methods: {
    async handleSubmit() {
      this.isSpinner = false;
      try {
        const response = await httpClient.post("login", this.formSubmit);
        if (response.status === 200) {
          Nprogress.start();

          await this.$store.dispatch("auth/userLogin", response.data.data, {
            root: true,
          });
          localStorage.setItem(
            KEY_LOCAL_STORAGE,
            JSON.stringify(response.data.data)
          );
          this.$router.push({ path: "/" }).catch(() => {});

          this.isSpinner = true;
          Nprogress.done();
        }
      } catch (error) {
        if (error) {
          Nprogress.done();

          this.isCorrectUser = true;
          this.isSpinner = true;
        }
        console.log("Error:", error);
      }
    },

    displayPassword() {
      let x = document.getElementById("password");
      if (x.type === "text") {
        x.type = "password";
        this.isDisplay = true;
      }
    },

    hidePassword() {
      let x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
        this.isDisplay = false;
      }
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
.login {
}
.error {
  display: flex;
  padding: 8px 10px;
  border: 1px solid $color-common;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
  margin-bottom: 10px;
  img {
    object-fit: cover;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
.account {
  .input-text {
    width: 100%;
  }
}
.password-wrap {
  .input-text {
    width: 100%;
  }
}
.input-text {
  outline: none;
  padding: 5px 15px;
}

.password-wrap,
.account {
  transition: all 0.2s ease;
  margin: 10px 0;
  border: 1px solid $color-default-darker;
}

.password-wrap :focus {
  border: 1px solid $color-red;
  background-color: $color-btn;
}

.account :focus {
  border: 1px solid $color-red;
  background-color: $color-btn;
}

.password-wrap {
  display: flex;
  align-items: center;
  position: relative;

  .toggle-password {
    cursor: pointer;
    &:focus {
      border: none;
      background-color: transparent;
    }
  }

  .wrap-btn {
    position: absolute;
    right: 20px;
    img {
      width: 20px;
      object-fit: cover;
    }
  }
}

.remember {
  margin-top: 10px;
}

.btn-login {
  width: 100%;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
  color: $color-bg-white;
  font-size: $font-15;
  background-color: $primary-green;
  transition: 0.3s;
  margin-top: 10px;
  outline: none;
  border: none;
  &:hover {
    opacity: 0.8;
  }
}
</style>
