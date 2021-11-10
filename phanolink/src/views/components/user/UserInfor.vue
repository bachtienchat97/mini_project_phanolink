<template>
  <div class="user-infor container">
    <div class="user-infor__content container">
      <div class="user-infor__left">
        <div class="user-name">
          <p>Họ tên</p>
          <input type="text" placeholder="Nhập họ tên" />
        </div>

        <div class="email">
          <p>Email</p>
          <input type="text" placeholder="nhập email" />
        </div>

        <div class="phone">
          <p>Số điện thoại</p>
          <input type="text" placeholder="nhập số điện thoại" />
        </div>

        <div class="sex">
          <p>Giới tính</p>
          <div class="gender">
            <label for="gender-male">Nam</label>
            <input type="checkbox" value="male" v-model="form.gender" id="gender-male"/>
            <label for="gender-female" class="mr-20">Nữ</label>
            <input type="checkbox" value="female" v-model="form.gender" id="gender-female"/>
          </div>
        </div>

        <div class="birthday">
          <div class="form-birth">
            <label for="control">Ngày sinh</label>
            <select class="form-control">
            </select>
            <select v-model="form.selectedMonth" class="form-control">
              <option value="9">9</option>
            </select>
            <select v-model="form.selectedYear" class="form-control">
              <option value="1997">1997</option>
            </select>
          </div>
        </div>
      </div>

      <div class="user-infor__right">
        <input id="check" class="change-password" type="checkbox" />
        <label for="check">Thay đổi mật khẩu</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfor",
  data() {
    return {
      form: {
        gender: '',
        selectedYear: '',
        selectedMonth: ''
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/helpers/_variables';

.user-infor {
  margin: 0 15px;
  background-color: $color-bg-white;

  .user-infor__content {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
  }

  .user-infor__left {
    width: 60%;
  }

  .user-infor__right {
    width: 30%;
  }

  .change-password {
    border-radius: 2px;
    background: #01adab;
    margin-right: 5px;
  }
}
</style>
