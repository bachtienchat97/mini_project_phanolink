<template>
<div class="wrapper-header container-fluid">
  <div class="header container">
    <div class="header-first">
      <ul class="list-header-first">
        <li>
          <img class="hotfire" src="../../assets/img/hotfire.png" alt="hotfire">
          <a href="#">Khuyến mãi HOT</a></li>
        <li>
          <img class="noti" src="../../assets/img/bell.png" alt="bell">
          <a href="#">Thông báo của tôi</a>
        </li>
        <li>
          <div class="user">
            <img src="../../assets/img/login2x.png" alt="user">
            <ul class="login-or-regis">
              <li><a href="#">Đăng nhập</a></li>
              <li><a href="#">Tài khoản</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="header-second">
       <img src="../../assets/img/Logo.png" alt="logo">

    <div class="header-content">
      <div class="header-content__left">
        <input class="search" type="text" placeholder="Bạn đang tìm thuốc gì...">

        <div class="btn-search">
          <b-icon icon="search"></b-icon> 
          tìm kiếm
        </div>
      </div>

      <div class="header-content__right">
         <div class="prescription">
           <img src="../../assets/img/prescription.png" alt="prescription">
           <span>Tạo toa thuốc</span>
         </div>

         <div class="cart">
           <img src="../../assets/img/cart2x.png" alt="cart2x">
           <span>Giỏ hàng</span>
         </div>
      </div>
    </div>
    </div>
    
    <div class="header-third">
      <ul>
        <li><img src="../../assets/img/category-product.png" alt="`"><a href="#">DANH MỤC SẢN PHẨM</a></li>
        <li><img src="../../assets/img/hot-sale.png" alt="hot-sale"><a href="#">KHUYẾN MÃI HOT</a></li>
        <li><img src="../../assets/img/location.png" alt="location"><a href="#">HỆ THỐNG NHÀ THUỐC</a></li>
        <li><img src="../../assets/img/heart2x.png" alt="heart2x"><a href="#">GÓC SỨC KHỎE</a></li>
        <li><img src="../../assets/img/intro.png" alt="intro"><a href="#">GIỚI THIỆU</a></li>
        <li><img src="../../assets/img/question.png" alt="question"><a href="#">HƯỚNG DẪN</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
name: 'Header'
}
</script>

<style lang="scss" scoped>
.wrapper-header {
  background: #01ADAB;
  width: 100%;
  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    .header-first {
      width: 100%;
      margin-bottom: 10px;

       ul {
         list-style: none;
         display: flex;
         margin: 0;
         padding: 0;
         
          li {
           font-size: 14px;
          }

          a {
           text-decoration: none;
           color: #ffffff;
           &:hover {
             color: rgb(230, 108, 21);
           }
          }

         .user {
           display: flex;
           align-items: center;

            img {
              object-fit: cover;
              object-position: center;
              width: 27px;
            }

           .login-or-regis {
              display: flex;
              flex-direction: column;
              color: #ffffff;
              padding: 0;
              margin: 0;
              margin-left: 10px;
              li {
                margin: 0;
              }

              a {
                text-decoration: none;
                &:hover {
                  color: rgb(230, 108, 21);
                }
              }
           }
         }
       }

       .list-header-first {
         display: flex;
         justify-content: right;
         align-items: center;

         li {
           margin-left: 20px;
         }
       }

       .hotfire,.noti {
         width: 29px;
         object-fit: cover;
         object-position: center;
         margin-right: 5px;
       }

       
    }

    .header-second {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .header-third {
      width: 100%;
      margin-bottom: 15px;

      img {
        height: 26px;
        object-position: center;
        object-fit: cover;
      }

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 0 -20px;
        padding: 0;

        li {
          margin-left: 20px;

          a {
          text-decoration: none;
          color: #ffffff;
          font-size: 14px;
          margin-left: 10px;

          &:hover {
           color: rgb(230, 108, 21);
          }
         }
       }
      }
    }

    .header-content {
      display: flex;
      align-items: center;
      margin-left: -20px;
    }
    
    .header-content__right {
      display: flex;
      margin-left: 20px;

       .prescription, .cart {
         background: #ffffff;
         border-radius: 3px;
         padding: 4px 8px;
       }

       .prescription {
         &:hover {
           background: rgb(230, 108, 21);
           cursor: pointer;
           color: #ffffff

         }
       }

       .cart {
         margin-left: 20px;

         &:hover {
           background: rgb(230, 108, 21);
           cursor: pointer;
           color: #ffffff

         }
       }
    }

    .header-content__left {
      font-size: 15px;
      display: flex;
      border-radius: 10px;
      margin-left: 20px;
      
      .search {
        border: none;
        outline: none;
        border-radius: 5px 0 0 5px;
        padding: 5px 9px;
        width: 500px
      }
      .btn-search {
        background: #E2E3E4;
        padding: 5px 9px;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        &:hover {
         background: #b0b5b9;
        }

        .b-icon {
          margin-right: 5px;
        }
      }
    }
  }
}

</style>