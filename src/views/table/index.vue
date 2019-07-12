<template>
  <div class="app-container">
    <!-- <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table> -->
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column v-for="(item, index) in thList" :key="index" :prop="item.data" :label="item.label">
        <template slot-scope="scope">{{ scope.row[item.data] }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="getUserDetail(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList, getUserList, getUserDetail } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      tableData: [],
      thList: [
        { label: 'id', data: 'id' },
        { label: '姓名', data: 'name' },
        { label: '性别', data: 'sex' },
        { label: '年龄', data: 'age' },
        { label: '分数', data: 'score' }
      ]
    }
  },
  created() {
    // this.fetchData()
    this.getUserList()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    getUserList() {
      getUserList()
        .then((res) => {
          if (res.code === 20000) {
            this.tableData = res.data
          }
        })
    },
    getUserDetail(id) {
      var params = {
        id
      }
      getUserDetail(params)
        .then((res) => {
          if (res.code === 20000) {
            console.log('getUserDetail res.data', res.data)
            alert(res.data.name)
          }
        })
    }
  }
}
</script>
