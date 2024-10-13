<template>
  <div class="w-[70%] ml-[15%] mt-[30px]">
    <div>
      <el-select
        v-model="project"
        filterable
        @change="getproject"
        placeholder="所属项目"
        style="width: 240px"
      >
        <el-option v-for="item in ipnut.project" :label="item.label" :value="item.value" />
      </el-select>
      <el-select
        v-model="Openness"
        filterable
        @change="getOpenness"
        clearable="true"
        placeholder="公开性"
        style="width: 240px"
      >
        <el-option v-for="item in ipnut.Openness" :label="item.label" :value="item.value" />
      </el-select>
      <el-select
        v-model="pigeonhole"
        filterable
        @change="getpigeonhole"
        placeholder="归档状态"
        style="width: 240px"
      >
        <el-option v-for="item in ipnut.pigeonhole" :label="item.label" :value="item.value" />
      </el-select>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="搜素关键字"
        :remote-method="remoteMethod"
        style="width: 240px"
      >
      </el-select>
    </div>
    <div>
      <el-table :data="res1" style="width: 100%">
        <el-table-column prop="name" label="仓库名称" width="180" />
        <el-table-column prop="full_name" label="所属项目" width="180" />
        <el-table-column prop="##" label="合并请求" />
        <el-table-column prop="created_at" label="更新时间" width="180" />
        <el-table-column prop="###" label="操作" width="180" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import to from "await-to-js";
import { GetAllRepositories } from "../../servlcee/index";

const project = ref();
const Openness = ref();
const pigeonhole = ref();
const ipnut = {
  project: [
    { label: "项目一", value: "object1" },
    { label: "项目二", value: "object2" },
  ],
  Openness: [
    { label: "全部", value: "all" },
    { label: "公开", value: "public" },
    { label: "私有", value: "private" },
  ],
  pigeonhole: [
    { label: "已归档", value: "pigeonhole1" },
    { label: "未归档", value: "pigeonhole2" },
  ],
};
const res1 = ref();
const getOpenness = async (event) => {
  const loginData = {
    access_token: "caae03c067457916e7ff995275646050",
    visibility: event,
    q: "",
  };
  const [err, res] = await to(GetAllRepositories(loginData));
  console.log(res.data);
  res1.value = res.data;
};
const remoteMethod = async (event) => {
  const loginData = {
    access_token: "caae03c067457916e7ff995275646050",
    q: event,
    visibility: "all",
  };
  const [err, res] = await to(GetAllRepositories(loginData));
  console.log(res.data);
  res1.value = res.data;
};
</script>
<style scoped>
.example-showcase .el-select-v2 {
  margin-right: 20px;
}
</style>
