<template>
  <div>
    <div class="queryTop">
      <input type="text" /> <el-button type="info" icon="el-icon-search" circle></el-button>
      <el-button type="primary" @click="addFormVisible = true">添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date" label="序号" type="index" :index="getIndex" width="150"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="140"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="140"> </el-table-column>
      <el-table-column prop="mobile" label="电话" width="140"> </el-table-column>
      <el-table-column prop="role_name" label="职位" width="140"> </el-table-column>
      <el-table-column prop="zip" label="状态" width="140">
        <template>
          <el-switch prop="mg_state" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="160">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click.native.prevent="edit(scope.row)" circle></el-button>
          <el-button type="danger" @click.native.prevent="Godel(scope.row)" icon="el-icon-delete" circle></el-button>
          <el-button
            type="warning"
            icon="el-icon-star-off"
            @click.native.prevent="quanXian(scope.row)"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 登录框 -->

    <el-dialog title="添加用户" :visible.sync="addFormVisible">
      <el-form :model="addForm">
        <el-form-item label="用户名" :label-width="'100px'">
          <el-input v-model="addForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="'100px'">
          <el-input v-model="addForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="'100px'">
          <el-input v-model="addForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="'100px'">
          <el-input v-model="addForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 修饰框 -->
    <el-dialog title="修改用户" :visible.sync="editFormVisible">
      <el-form :model="editForm">
        <el-form-item label="用户名" :label-width="'100px'">
          <el-input v-model="editForm.username" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="'100px'">
          <el-input v-model="editForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="'100px'">
          <el-input v-model="editForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit()">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 权限框 -->
    <el-dialog title="修改用户" :visible.sync="FormVisible">
      <el-form :model="editForm">
        <el-form-item label="用户名" :label-width="'100px'">
          <el-input v-model="editForm.username" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="当前角色" :label-width="'100px'">
          <el-input v-model="editForm.role_name" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分配新角色" :label-width="'100px'">
          <select>
            <option v-for="item in roleData" :key="item.id" :value="item.roleName">{{ item.roleName }}</option>
          </select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="FormVisible = false">取 消</el-button>
        <el-button type="primary" @click="quanXian()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Users, addUsers, del, Edit, Role } from "@/api/api"
export default {
  data() {
    return {
      tableData: [],
      roleData: [],
      addForm: {},
      editForm: {},
      addFormVisible: false,
      editFormVisible: false,
      FormVisible: false,
      userPage: {
        pagenum: 1,
        pagesize: 5,
        query: ""
      }
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    getIndex(index) {
      return index + 1
    },
    getUsers() {
      Users(this.userPage).then((response) => {
        let { data: res } = response
        this.tableData = res.data.users
      })
    },
    add() {
      addUsers(this.addForm).then(() => {
        this.getUsers()
        this.addFormVisible = false
      })
    },
    Godel(a) {
      console.log(a.id)
      del(a.id).then((res) => {
        console.log(res)
        this.getUsers()
      })
    },
    edit(data) {
      if (data) {
        this.editFormVisible = true
        this.editForm = data
      } else if (!data) {
        Edit(this.editForm).then((response) => {
          let { data: res } = response
          console.log(res)
          this.getUsers()
          this.editFormVisible = false
        })
      }
    },
    quanXian(data) {
      if (data) {
        this.editForm = data
        this.FormVisible = true
      } else if (!data) {
        Edit(this.editForm).then((response) => {
          let { data: res } = response
          console.log(res)
          this.getUsers()
          this.FormVisible = false
        })
      }
    }
  },
  mounted() {
    this.getUsers()
  },
  created() {
    Role().then((response) => {
      let { data: res } = response
      this.roleData = res.data
      console.log(this.roleData)
    })
  }
}
</script>

<style>
.queryTop {
  line-height: 0 !important;
  text-align: left !important;
  padding: 10px;
}
.queryTop > input {
  width: 300px;
  height: 30px;
}
.has-gutter {
  line-height: 0px !important;
}
</style>
