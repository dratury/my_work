<template>
  <div class="power">
    <div v-if="this.$route.query.type == '2-1'">
      <el-button type="primary" @click="addFormVisible = true">添加角色</el-button>
      <!-- 角色表格 -->
      <el-table :data="roleData" style="width: 100%">
        <el-table-column type="expand">
          <template>
            <!-- slot-scope="props" -->
            <div class="zhanShi">
              <div>一级</div>
              <div>二级</div>
              <div>三级</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="#" prop="index" type="index" :index="getIndex"> </el-table-column>
        <el-table-column label="角色名称" prop="roleName"> </el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
        <el-table-column label="操作" prop="desc">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click.native.prevent="edit(scope.row)">编辑</el-button>
            <el-button type="danger" @click.native.prevent="del(scope.row.id)" icon="el-icon-delete">删除</el-button>
            <el-button type="warning" icon="el-icon-star-off" @click.native.prevent="fenDialogFormVisible = true"
              >清除权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 权限列表 -->
    <div v-if="this.$route.query.type == '2-2'">
      <el-table :data="powerData" height="250" border style="width: 100%">
        <el-table-column prop="index" label="#" type="index" :index="getIndex" width="180"> </el-table-column>
        <el-table-column prop="authName" label="权限名称" width="180"> </el-table-column>
        <el-table-column prop="path" label="路径"> </el-table-column>
        <el-table-column prop="level" label="权限等级"> </el-table-column>
      </el-table>
    </div>

    <!-- 修改框 -->
    <el-dialog title="修改角色" :visible.sync="editFormVisible">
      <el-form :model="editForm">
        <el-form-item label="角色名称" :label-width="'100px'">
          <el-input v-model="editForm.roleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" :label-width="'100px'">
          <el-input v-model="editForm.roleDesc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit()">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加框 -->
    <el-dialog title="修改角色" :visible.sync="addFormVisible">
      <el-form :model="addForm">
        <el-form-item label="角色名称" :label-width="'100px'">
          <el-input v-model="addForm.roleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" :label-width="'100px'">
          <el-input v-model="addForm.roleDesc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 分配权限 -->
    <el-dialog title="分配权限" :visible.sync="fenDialogFormVisible">
      <el-tree
        :data="fenData"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps"
      ></el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="eddDialogFormVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Power, Role, RoleEdit, RoleDel, RightType, Rights, fenRole } from "@/api/api"
export default {
  data() {
    return {
      powerData: [],
      editForm: {},
      addForm: {},
      roleData: [],
			fenData: [],
			type:"tree",
      editFormVisible: false,
      addFormVisible: false,
      fenDialogFormVisible: false,
      defaultProps: {
        children: "children",
        label: "authName"
      }
    }
  },
  methods: {
    add() {
      Rights(this.addForm).then((Response) => {
        console.log(Response)
        this.addFormVisible = false
        this.getUsers()
        this.getRoleList()
      })
    },
    getIndex(index) {
      return index + 1
    },
    getUsers() {
      Power("list").then((response) => {
        let { data: res } = response
        res.data.forEach((item) => {
          if (item.level == 0) {
            item.level = "一级"
          } else if (item.level == 1) {
            item.level = "二级"
          } else if (item.level == 2) {
            item.level = "三级"
          }
        })
        this.powerData = res.data
      })
    },
    getRoleList() {
      Role().then((response) => {
        let { data: res } = response
        this.roleData = res.data
        console.log(this.roleData)
      })
    },
    edit(data) {
      if (data) {
        this.editFormVisible = true
        this.editForm = data
      } else if (!data) {
        RoleEdit(this.editForm).then((response) => {
          let { data: res } = response
          console.log(res)
          this.getUsers()
          this.editFormVisible = false
        })
      }
    },
    del(id) {
      RoleDel(id).then(() => {
        this.getRoleList()
        this.getUsers()
      })
    },
    Power() {
      RightType().then((response) => {
        console.log(response)
      })
    },
    fenPei() {
      fenRole(this.type).then((res) => {
        console.log("res", res)
        this.fenData = res.data.data
      })
    }
  },
  mounted() {
    this.getUsers()
    this.getRoleList()
    this.fenPei()
  }
}
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.power {
  line-height: 0px !important;
  text-align: left !important;
}
.zhanShi {
  display: flex;
  justify-content: space-evenly;
}
</style>
