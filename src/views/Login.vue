<template>
  <div class="w-[99vw] h-[55vw] flex">
    <div>
      <img
        class="w-[39.83vw] h-54.62vw"
        src="../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
        alt=""
      />
    </div>
    <!-- 右侧登录面板 -->
    <div class="mt-[5vw] ml-[14.72vw] w-[59.9vw]">
      <div><p class="text-[1.88vw] text-center">登录，即刻创造您的应用</p></div>
      <div class="mt-[5.49vw]">
        <div class="pl-[10vw]">
          <!-- 账号框 -->
          <div>
            <el-input
              class="w-[25.45vw] h-[3.61vw]"
              v-model="input.username"
              placeholder="账号"
            />
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
          <div>
            <el-checkbox v-model="checked2" class="mr-[150px]"
              >我已阅读并同意<a href="">服务协议</a>和<a href=""
                >隐私政策</a
              ></el-checkbox
            >
          </div>
        </div>
        <!-- 登录按钮 -->
        <div class="text-center">
          <el-button type="primary" class="w-[30.56vw] h-[3.75vw]"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { token } from "../api";

const input = ref({
  username: "",
  password: "",
});

console.log(input.value);

// token(input.value)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const checked2 = ref(false);
</script>
<style></style>
