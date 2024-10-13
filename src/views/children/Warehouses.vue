<template>
  <div class="relative">
    <div class="text-center absolute top-[9.41vw] left-[29vw]">
      <p class="text-[20px] text-black font-semibold">欢迎使用代码仓库</p>
      <p class="text-[#686f7f]">
        代码仓库用于托管基于GIT或SVN管理的代码库。通过Review合并请求来审查代码变更。
      </p>
      <p class="text-[#686f7f]">版本发布可以用来标记、发布代码版本</p>
    </div>
    <div class="flex flex-row justify-center absolute top-[15.41vw] left-[26vw]">
      <div>
        <img src="../../images/1.svg" alt="" class="ml-[35px]" />
        <p class="font-semibold">创建代码仓库</p>
        <p class="w-[12.5vw] flex-wrap">浏览、编辑代码以及查看代码提交记录</p>
      </div>
      <Icon
        class="mt-[3.02vw]"
        icon="mdi:arrow-right-thin"
        width="1.15vw"
        height="1.15vw"
        style="color: #dee0e2"
      />
      <div>
        <img src="../../images/2.svg" alt="" class="ml-[35px]" />
        <p class="font-semibold">合并请求</p>
        <p class="w-[12.5vw] flex-wrap">发起合并请求并邀请协作者Review变更内容</p>
      </div>
      <Icon
        class="mt-[3.02vw]"
        icon="mdi:arrow-right-thin"
        width="1.15vw"
        height="1.15vw"
        style="color: #dee0e2"
      />
      <div>
        <img src="../../images/3.svg" alt="" class="ml-[35px]" />
        <p class="font-semibold">代码版本</p>
        <p class="w-[12.5vw] flex-wrap">发布、标记代码版本</p>
      </div>
    </div>
    <div class="absolute top-[30vw] right-[46vw]">
      <div
        class="inline-block bg-[#2c323c] text-white px-[5px] w-[8.75vw] h-[2.78vw] rounded-md text-center leading-[2.78vw]"
        @click="goCode"
      >
        创建代码仓库
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useRouter } from "vue-router";

const router = useRouter();
const goCode = () => {
  console.log(1);
  router.push("/code");
};
</script>
<style>
p {
  text-align: center;
}
</style>
