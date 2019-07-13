<template>
  <div class="app-container">
    <el-button @click="dialogFormVisible = true" size="small">添加</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column v-for="(item, index) in thList" :key="index" :prop="item.data" :label="item.label">
        <template slot-scope="scope">{{ scope.row[item.data] }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span><el-button size="mini" @click="editUser(scope.row.id)">编辑</el-button></span>
          <span><el-button type="success" size="mini " @click="deleteUser(scope.row.id)">删除</el-button></span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="form"  label-position="right" ref="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="分数">
          <el-input v-model="form.score"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmHandler">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList, getUserList, getUserDetail, deleteUser, addUser, updateUser } from '@/api/table'

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
      ],
      form: {
        name: '',
        sex: '男',
        age: '',
        score: ''
      },
      dialogFormVisible: false
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
    editUser(id) {
      getUserDetail({id})
      .then((res) => {
        if (res.code === 20000) {
          console.log('getUserDetail res.data', res.data)
          this.form = res.data
          this.dialogFormVisible = true
        }
      })
    },
    deleteUser(id) {
      var params = {
        id
      }
      deleteUser(params)
        .then((res) => {
          if (res.code === 20000) {
            this.getUserList()
          }
        })
    },
    confirmHandler() {
      if (this.form.id) {
        updateUser(this.form)
        .then((res) => {
          if (res.code === 20000) {
            // this.form = {}
            // this.$refs['form'].resetFields();
            this.form = {
              name: '',
              sex: '男',
              age: '',
              score: ''
            }
            this.getUserList()
            this.dialogFormVisible = false
          }
        })
      } else {
        addUser(this.form)
        .then((res) => {
          if (res.code === 20000) {
            // this.$refs['form'].resetFields();
            this.form = {
              name: '',
              sex: '男',
              age: '',
              score: ''
            }
            this.getUserList()
            this.dialogFormVisible = false
          }
        })
      }
      
    }
  }
}
</script>
