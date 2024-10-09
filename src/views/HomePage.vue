<template>
  <div class="common-layout">
    <el-container class="bg-[#f8f9fc]">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        collapse="true"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon>
            <Icon
              icon="icon-park-outline:workbench"
              width="1.16vw"
              height="1.16vw"
              style="color: black"
            />
          </el-icon>
          <template #title> 工作台 </template>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon
            ><Icon
              icon="solar:folder-open-outline"
              width="1.15vw"
              height="1.15vw"
              style="color: black"
          /></el-icon>
          <template #title>项目</template>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon
            ><Icon
              icon="arcticons:chaton-ai"
              width="1.15vw"
              height="1.15vw"
              style="color: black"
          /></el-icon>
          <template #title>AI</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon
            ><Icon
              icon="solar:document-add-broken"
              width="1.15vw"
              height="1.15vw"
              style="color: black"
          /></el-icon>
          <template #title>事项</template>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon
            ><Icon
              icon="fluent:code-block-20-regular"
              width="1.15vw"
              height="1.15vw"
              style="color: black"
          /></el-icon>
          <template #title>代码</template>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon
            ><Icon
              icon="fluent:cube-24-regular"
              width="1.15vw"
              height="1.15vw"
              style="color: black"
          /></el-icon>
          <template #title>制品</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon
            ><Icon
              icon="arcticons:marketwatch"
              width="1.15vw"
              height="1.15vw"
              style="color: black"
          /></el-icon>
          <template #title>洞察</template>
        </el-menu-item>
        <el-menu-item index="8">
          <el-icon
            ><Icon
              icon="ph:book-open-text"
              width="1.15vw"
              height="1.15vw"
              style="color: black"
          /></el-icon>
          <template #title>知识</template>
        </el-menu-item>
        <el-menu-item index="9">
          <el-icon
            ><Icon
              icon="carbon:ai-governance-lifecycle"
              width="1.15vw"
              height="1.15vw"
              style="color: black"
          /></el-icon>
          <template #title>自动化</template>
        </el-menu-item>
      </el-menu>
      <el-container>
        <el-header
          class="flex justify-between h-[4.5vw] border-b-2 border-black"
          ><div class="font-semibold leading-[60px] h-[60px]">代码仓库</div>
          <router-link to="/Login">登录</router-link></el-header
        >
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
