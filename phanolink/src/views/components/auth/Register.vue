<template>
  <div>
    <form @submit.prevent="handleSubmit" v-if="isSuccess === false">
      <p>Họ tên</p>
      <input type="text" placeholder="Nhập họ tên" v-model="userForm.name" />

      <p>Email</p>
      <input type="email" placeholder="Nhập Email" v-model="userForm.email" />

      <p>Mật khẩu</p>
      <input
        type="password"
        placeholder="Mật khẩu từ 6 đến 32 ký tự"
        v-model="userForm.password"
      />

      <p>Số điện thoại</p>
      <input placeholder="Nhập số điện thoại" v-model="userForm.phone" />
      <button class="btn-register">Tạo tài khoản</button>
    </form>

    <div class="register-success" v-if="isSuccess">
      <p>
        Bạn Đã Đăng Ký Thành Công Với Email : <span>{{ accountRegister }}</span>
      </p>
      <div @click="btnBackLogin">
        Quay Lại Đăng Nhập
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

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
      isSuccess: false,
      accountRegister: "",
    };
  },

  methods: {
    ...mapActions(["register"]),

    async handleSubmit() {
      const response = await axios.post("register", {
        name: this.userForm.name,
        email: this.userForm.email,
        password: this.userForm.password,
        phone: this.userForm.phone,
      });

      if (response.status === 200) {
        this.isSuccess = true;
        this.accountRegister = response.data.data?.email;
      }
    },

    btnBackLogin() {
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

.btn-register {
  width: 100%;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
  color: $color-bg-white;
  font-size: $font-15;
  margin-top: 15px;
  background-color: $primary-green;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
}

.register-success {
  padding: 15px;

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
      color: rgb(29, 252, 29);
    }
  }

  
}


</style>
