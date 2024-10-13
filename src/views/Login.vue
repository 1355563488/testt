<template>
  <div class="w-[100vw] h-[55vw] flex">
    <div>
      <el-carousel class="w-[39.83vw] h-[54.62vw]">
        <el-carousel-item v-for="item in imageurl" :key="item" class="w-[39.83vw] h-[54.62vw]">
          <img :src="item" alt="" class="w-[39.83vw] h-[54.62vw]" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 右侧登录面板 -->
    <div class="mt-[5vw] ml-[14.69vw] w-[59.9vw]">
      <div><p class="text-[1.88vw] text-center">登录，即刻创造您的应用</p></div>
      <div class="mt-[5.49vw]">
        <div class="pl-[10vw] pr-[10vw]">
          <!-- 账号框 -->
          <div>
            <el-input class="w-[25.45vw] h-[3.61vw]" v-model="input.username" placeholder="邮箱" />
          </div>
          <!-- 密码框 -->
          <div class="mt-[1.08vw]">
            <el-input
              v-model="input.password"
              type="password"
              placeholder="密码"
              show-password
              class="w-[25.45vw] h-[3.61vw]"
            />
          </div>
          <!-- 协议 -->
          <div class="mt-[1vw]">
            <el-checkbox v-model="checked2" class="mr-[150px]"
              >我已阅读并同意<a href=" " class="text-blue-600">服务协议</a>和<a
                href=""
                class="text-blue-600"
                >隐私政策</a
              ></el-checkbox
            >
          </div>
        </div>
        <!-- 登录按钮 -->
        <div class="text-center mt-[3.13vw]">
          <el-button type="primary" class="x" @click="goHome">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { token } from "../servlcee/index";
import to from "await-to-js";
import { useRouter } from "vue-router";
// import { postOAuthTokenAPI } from "../api/login";

const router = useRouter();
const input = ref({
  username: "1355563488@qq.com",
  password: "shengsi5151315",
});

const checked2 = ref(false);
const goHome = async () => {
  const loginData = {
    grant_type: "password",
    username: input.value.username,
    password: input.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  const [err, res] = await to(token(loginData));
  console.log(res);

  if (res.statusText === "OK") {
    if (checked2.value === true) {
      ElNotification({
        title: "成功",
        message: "登录成功",
        type: "success",
      });
      console.log(res);
      router.push({ name: "Home" });
    } else {
      ElNotification({
        title: "错误",
        message: "请确认服务协议以及隐私政策",
        type: "error",
      });
    }
  } else {
    ElNotification({
      title: "错误",
      message: "登录失败，请重新登录",
      type: "error",
    });
  }
};
// const goHome = async () => {
//   const res = await postOAuthTokenAPI(input.value);
//   console.log(res);
// };

const imageurl = ref([
  "../../src/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png",
  "../../src/images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png",
  "../../src/images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png",
]);
</script>
<style scoped>
.x {
  height: 3.89vw;
  width: 30.59vw;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}
.el-carousel__item {
  height: 54.9vw;
}
</style>
