<template>
  <div class="common-layout">
    <el-container class="bg-[#f8f9fc]">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo h-[910px] relative"
        collapse="true"
        @open="handleOpen"
        @close="handleClose"
        router="true"
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
        <el-menu-item class="text-center" index="10">
          <el-icon>
            <Icon
              icon="icon-park-solid:people-minus"
              width="1vw"
              height="1vw"
              style="color: black"
              class="pl-[5px]"
            />
          </el-icon>
          <template #title>关于我</template>
        </el-menu-item>
        <el-menu-item class="text-center" index="11">
          <el-icon>
            <Icon
              icon="hugeicons:more-01"
              width="1.15vw"
              height="1.15vw"
              style="color: #686f7f"
            />
          </el-icon>
          <template #title>更多</template>
        </el-menu-item>
        <el-menu-item class="text-center" index="12">
          <el-icon>
            <Icon
              icon="line-md:bell"
              width="1.15vw"
              height="1.15vw"
              style="color: #686f7f"
            />
          </el-icon>
          <template #title>消息</template>
        </el-menu-item>
        <el-menu-item class="text-center" index="13">
          <el-icon>
            <Icon
              icon="tdesign:setting"
              width="1.15vw"
              height="1.15vw"
              style="color: #686f7f"
            />
          </el-icon>
          <template #title>设置</template>
        </el-menu-item>
        <el-menu-item class="text-center" index="14">
          <el-icon>
            <Icon
              icon="octicon:question-24"
              width="1.15vw"
              height="1.15vw"
              style="color: #686f7f"
            />
          </el-icon>
          <template #title>疑问</template>
        </el-menu-item>
        <el-menu-item class="text-center" text @click="drawer = true">
          <el-icon>
            <Icon
              icon="stash:user-avatar-duotone"
              width="1.15vw"
              height="1.15vw"
              style="color: #686f7f"
            />
          </el-icon>
          <template #title>个人中心</template>
        </el-menu-item>
        <el-drawer
          v-model="drawer"
          title="个人主页"
          direction="ltr"
          size="20%"
          class="min-w-[350px] absolute left-[63px] top-[0px]"
          modal="false"
        >
          <ul class="ce">
            <li>个人账户设置</li>
            <li>服务订购</li>
            <li>邀请成员</li>
            <li>切换语言</li>
            <li>工单中心</li>
            <li>更新日志</li>
            <li @click="quit">退出</li>
          </ul>
        </el-drawer>
      </el-menu>
      <el-container>
        <el-header
          class="flex justify-between h-[4.5vw] border-b-[1px] border-[#caced9] bg-[#fff]"
          ><div class="font-semibold leading-[60px] h-[60px]">
            代码仓库
          </div></el-header
        >
        <el-main class="bg-[#fff] p-0">
          <div class="h-[3.31vw] pl-[20px] leading-[3.31vw] relative">
            <router-link
              to="/code/RecentlyVisited"
              class="pb-[20px] text-center focus:border-b-2 border-[#306fde] h-[2.31vw]"
              >最近访问</router-link
            >
            <router-link
              to="/code/Warehouses"
              class="pb-[20px] text-center focus:border-b-2 border-[#306fde] ml-[1.5vw] h-[2.31vw]"
              >全部仓库</router-link
            >
            <router-link
              to="/code/SourceRepositories"
              class="pb-[20px] text-center ml-[1.5vw] h-[2.31vw] focus:border-b-2 border-[#306fde]"
              >开源仓库</router-link
            >
            <router-link
              to="/code/RepositedSelect"
              class="pb-[20px] text-center ml-[1.5vw] h-[2.31vw] focus:border-b-2 border-[#306fde]"
              >仓库列表</router-link
            >
            <div
              class="inline-block bg-[#2c323c] rounded-md text-white h-[2.15vw] leading-[2.15vw] px-[5px] absolute right-[1.67vw] bottom-[0.5vw]"
            >
              创建代码仓库
            </div>
          </div>
          <hr />

          <div><RouterView /></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const drawer = ref(false);

const quit = () => {
  router.push("/Login");
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 500px;
}
.el-main {
  padding: 0;
}
.ce > li {
  margin: 10px 0px;
}
</style>
