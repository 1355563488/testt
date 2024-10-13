<template>
  <div class="common-layout">
    <el-container class="bg-[#f8f9fc]">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo h-[910px] relative"
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
            ><Icon icon="arcticons:chaton-ai" width="1.15vw" height="1.15vw" style="color: black"
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
            ><Icon icon="arcticons:marketwatch" width="1.15vw" height="1.15vw" style="color: black"
          /></el-icon>
          <template #title>洞察</template>
        </el-menu-item>
        <el-menu-item index="8">
          <el-icon
            ><Icon icon="ph:book-open-text" width="1.15vw" height="1.15vw" style="color: black"
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
            <Icon icon="hugeicons:more-01" width="1.15vw" height="1.15vw" style="color: #686f7f" />
          </el-icon>
          <template #title>更多</template>
        </el-menu-item>
        <el-menu-item class="text-center" index="12">
          <el-icon>
            <Icon icon="line-md:bell" width="1.15vw" height="1.15vw" style="color: #686f7f" />
          </el-icon>
          <template #title>消息</template>
        </el-menu-item>
        <el-menu-item class="text-center" index="13">
          <el-icon>
            <Icon icon="tdesign:setting" width="1.15vw" height="1.15vw" style="color: #686f7f" />
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
        <el-menu-item class="text-center" index="15" text @click="drawer = true">
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
            <li>退出</li>
          </ul>
        </el-drawer>
      </el-menu>
      <el-container>
        <el-header class="flex justify-between h-[4.5vw] border-b-[1px] border-[#caced9] bg-[#fff]"
          ><div class="font-semibold leading-[60px] h-[60px]">代码仓库</div></el-header
        >
        <el-main class="bg-[#fff] p-0">
          <!-- 创建仓库 -->
          <div class="h-[3.31vw] pl-[20px] leading-[3.31vw] relative">
            <!-- 创建代码仓库以及返回按钮 -->
            <div>
              <el-button circle class="shadow-lg mb-[5px]" @click="BackHome"
                ><Icon
                  icon="line-md:arrow-left"
                  width="1.15vw"
                  height="1.15vw"
                  style="color: #2469f6"
              /></el-button>
              <div class="font-semibold pl-[15px] text-[20px] inline-block">创建代码仓库</div>
            </div>
            <!-- 所属项目以及下拉菜单 -->
            <div>
              <div class="font-semibold">
                所属项目<span class="text-[#d94547] ml-[3px]">*</span>
              </div>
              <div class="w-[22vw]">
                <el-select v-model="input.project" placeholder="所属项目">
                  <el-option label="项目1" value="项目1i" />
                  <el-option label="项目2" value="项目2" />
                </el-select>
              </div>
            </div>
            <!-- 仓库类型以及名称 -->
            <div>
              <div>
                <div class="font-semibold inline-block">
                  仓库类型<span class="text-[#d94547] ml-[3px]">*</span>
                </div>
                <div class="font-semibold inline-block ml-[4vw]">
                  仓库名称<span class="text-[#d94547] ml-[3px]">*</span>
                </div>
              </div>
              <el-input
                v-model="input.name"
                style="max-width: 600px"
                maxlength="100"
                show-word-limit
                type="text"
                placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
                class="w-[39vw]"
              >
                <template #prepend
                  ><Icon
                    icon="devicon:git"
                    width="1.15vw"
                    height="1.15vw"
                    class="m-[2px] mr-[15px]"
                  />GIT仓库</template
                >
              </el-input>
            </div>
            <!-- 仓库描述以及 文本域-->
            <div>
              <div class="font-semibold">仓库描述</div>
              <el-input
                v-model="input.describe"
                style="width: 39vw"
                type="textarea"
                placeholder=" 请输入仓库描述"
                rows="5"
              />
            </div>
            <!-- 初始化仓库选项 -->
            <div>
              <div>初始化仓库</div>
              <div class="flex flex-col">
                <el-checkbox v-model="input.readme" label="生成README文件" />
                <el-checkbox v-model="inputProps.gitignore" label="添加.gitignore" />
                <el-checkbox v-model="checked1" disabled
                  >添加分支模型(仓库创建后将根据所选模型创建分支)</el-checkbox
                >
              </div>
            </div>
            <!-- 是否开源选项 -->
            <div>
              <div>是否开源</div>
              <div>
                <el-radio-group v-model="input.radio" class="flex flex-col justify-start relative">
                  <el-radio :value="true"
                    >私有仓库(仅对仓库成员可见，仓库成员可访问仓库。)</el-radio
                  >
                  <el-radio :value="false" class="absolute right-[155px] bottom-[0px]"
                    >公开仓库</el-radio
                  >
                </el-radio-group>
              </div>
            </div>
            <el-button type="primary" @click="SubmitEvent">提交</el-button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { inputProps } from "element-plus";
import { ref } from "vue";
import { useRouter } from "vue-router";
import to from "await-to-js";
import { CodeRepositories } from "../servlcee/index";

const drawer = ref(false);
const router = useRouter();
const input = ref({
  name: "",
  describe: "",
  project: "",
  readme: false,
  gitignore: "",
  radio: true,
});
const BackHome = () => {
  router.back();
};
const SubmitEvent = async () => {
  if (input.value.name) {
    if (input.value.project) {
      const loginData = {
        access_token: "142919abd220cac7e153237520a527fe",
        name: input.value.name,
        description: input.value.describe,
        private: input.value.radio,
        auto_init: input.value.readme,
      };
      ElNotification({
        title: "成功",
        message: "创建成功",
        type: "success",
      });
      const [err, res] = await to(CodeRepositories(loginData));
      router.push("/code/Warehouses");
    } else {
      ElNotification({
        title: "错误",
        message: "请选择所属项目",
        type: "error",
      });
    }
  } else {
    ElNotification({
      title: "错误",
      message: "请填写仓库名称",
      type: "error",
    });
  }
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
