<template>
  <div>
    <div style="float:left">
      <el-input placeholder="请输入内容" v-model="queryInfo.query" style="width:200px">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" @click="addDialogFormVisible=true">添加用户</el-button>
    </div>
    <el-table :data="userFrom" style="width: 100%">
      <el-table-column prop="id" label="ID" width="120"></el-table-column>
      <el-table-column prop="username" label="姓名" width="120"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="120"></el-table-column>
      <el-table-column prop="role_name" label="角色" width="120"></el-table-column>
      <el-table-column prop="mg_state" label="状态" width="120">
        <el-switch v-model="value" active-color="#13ce66"></el-switch>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot:default="{row}">
          <el-button type="primary" class="el-icon-edit" @click="eddOpen(row)"></el-button>
          <el-button type="danger" class="el-icon-delete" @click="del(row.id)"></el-button>
          <el-button type="warning" class="el-icon-setting" @click="fenPeiOpen(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <!-- 添加 -->
    <el-dialog title="添加用户" :visible.sync="addDialogFormVisible">
      <el-form :model="addFrom">
        <el-form-item label="用户名">
          <el-input v-model="addFrom.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addFrom.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="addFrom.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="addFrom.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 修改 -->
    <el-dialog title="添加用户" :visible.sync="eddDialogFormVisible">
      <el-form :model="eddFrom">
        <el-form-item label="用户名">
          <el-input v-model="eddFrom.username" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="eddFrom.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="eddFrom.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="eddDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edd">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 分配权限 -->
    <el-dialog title="分配角色" :visible.sync="userDialogFormVisible">
      <el-form :model="fenFrom">
        当前的用户：{{fenFrom.username}}
        <br />
        当前的角色：{{ fenFrom.role_name }}
        <br />
        <el-form-item label="分配新角色：">
          <el-select v-model="fenFrom" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="fenPei">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getUsers } from "@/api/api"
import { addUser } from "@/api/api"
import { delUser } from "@/api/api"
import { updateUser } from "@/api/api"
// import { fenUser } from "@/api/api"
export default {
  data() {
    return {
      userFrom: [],
      queryInfo: {
        query: "",
        pagesize: 2,
        pagenum: 1
      },
      value: false,
      total: 0,
      addDialogFormVisible: false,
      eddDialogFormVisible: false,
      userDialogFormVisible: false,
      addFrom: {},
      eddFrom: {},
      fenFrom: {}
    }
  },
  methods: {
    getList() {
      getUsers(this.queryInfo).then((res) => {
        this.userFrom = res.data.users
        this.total = res.data.total
      })
    },
    handleSizeChange(val) {
      this.queryInfo.pagesize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.queryInfo.pagenum = val
      this.getList()
    },
    add() {
      addUser(this.addFrom).then((res) => {
        console.log("add_res", res)
        this.addDialogFormVisible = false
        this.getList()
      })
    },
    del(id) {
      delUser(id).then((res) => {
        console.log("del_res", res)
        this.getList()
      })
    },
    eddOpen(row) {
      this.eddDialogFormVisible = true
      console.log("row", row)
      this.eddFrom = {
        id: row.id,
        username: row.username,
        email: row.email,
        mobile: row.mobile
      }
    },
    edd() {
      updateUser(this.eddFrom).then((res) => {
        console.log("edd_res", res)
        this.addFrom = this.eddFrom
        this.eddDialogFormVisible = false
        this.getList()
      })
    },
    fenPeiOpen(row) {
      this.userDialogFormVisible = true
      this.fenFrom = {
        id: row.id,
        username: row.username,
        role_name: row.role_name
      }
    },
		fenPei(){
		// 	fenUser(this.fenFrom).then((res)=>{
		// 		console.log('res',res);
		// 	})
		}
  },
  mounted() {
    this.getList()
  }
}
</script>

<style scoped>
.queryTop {
  line-height: 0 !important;
  text-align: left !important;
  padding: 10px;
}
.has-gutter {
  line-height: 0px !important;
}
</style>


