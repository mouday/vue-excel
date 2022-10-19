<template>
  <div class="container">
    <div style="display: flex">
      <el-upload
        ref="upload"
        action="action"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        :show-file-list="false"
        :http-request="handlehttpRequest"
        :on-change="onUploadChange"
      >
        <el-button
          size="small"
          type="primary"
          icon="el-icon-upload"
          >导入Excel</el-button
        >
      </el-upload>

      <el-button
        style="margin-left: 20px"
        size="small"
        icon="el-icon-download"
        @click="handleDownload"
        >导出Excel</el-button
      >

      <el-button
        style="margin-left: 20px"
        size="small"
        icon="el-icon-delete"
        @click="handleClear"
        >清空数据</el-button
      >
    </div>

    <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 20px"
    >
      <template v-if="list && list.length > 0">
        <el-table-column
          v-for="key in Object.keys(list[0] || {})"
          :prop="key"
          :label="key"
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import { readExcelToJson, saveJsonToExcel } from './utils.js'
import { tableData } from './data.js'

export default {
  data() {
    return {
      file: null,
      list: [],
    }
  },

  methods: {
    handlehttpRequest() {},

    // 读取文件为json数据
    onUploadChange(file) {
      console.log(file)
      this.file = file
      readExcelToJson(file).then((res) => {
        this.list = res
      })
    },

    handleDownload() {
      saveJsonToExcel(this.list, 'data.xlsx')
    },

    handleClear() {
      this.list = null
    },
  },

  created() {
    this.list = tableData
  },
}
</script>

<style lang="less">
body {
  background: #f4f4f4;
  padding: 0;
  margin: 0;
}

.container {
  width: 1024px;
  // min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
}
</style>
