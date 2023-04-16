<template>
  <div>
    <div>
      <el-button type="primary" @click="addDialogFormVisible=true">添加角色</el-button>
    </div>

    <el-table :data="roleFrom" style="width: 100%">
      <el-table-column type="expand">
        <!-- <template v-slot:default="{row}"> -->
          <el-form label-position="left" :data="roleFrom" inline class="demo-table-expand">
            <el-form-item prop="children">
              <!-- <span>{{ roleFrom.authName }}</span> -->
            </el-form-item>
          </el-form>
        <!-- </template> -->
      </el-table-column>
			<el-table-column width="180"></el-table-column>
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
			<el-table-column label="操作">
        <template v-slot:default="{row}">
          <el-button type="primary" class="el-icon-edit" @click="eddOpen(row)">编辑</el-button>
          <el-button type="danger" class="el-icon-delete" @click="del(row.id) ">删除</el-button>
          <el-button type="warning" class="el-icon-setting" @click="fenOpen(row)">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑 -->
    <el-dialog title="修改角色" :visible.sync="eddDialogFormVisible">
      <el-form :model="eddFrom">
        <el-form-item label="角色名称">
          <el-input v-model="eddFrom.roleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="eddFrom.roleDesc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="eddDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edd">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 添加角色 -->
    <el-dialog title="添加角色" :visible.sync="addDialogFormVisible">
      <el-form :model="addFrom">
        <el-form-item label="角色名称">
          <el-input v-model="addFrom.roleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="addFrom.roleDesc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 分配权限 -->
    <el-dialog title="分配权限" :visible.sync="fenDialogFormVisible">
      <el-tree
        :data="fenData"
        show-checkbox
        :node-key="fenData.id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps"
				@click="getHalfCheckedNodes"
      ></el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="fenDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { roleUser } from "@/api/api"
import { eddRole } from "@/api/api"
import { delRole } from "@/api/api"
import { addRole } from "@/api/api"
import { fenRole } from "@/api/api"
// import { leftRole } from "@/api/api"
export default {
  data() {
    return {
      roleFrom: [],
      eddDialogFormVisible: false,
      addDialogFormVisible: false,
      fenDialogFormVisible: false,
      eddFrom: {},
      addFrom: {},
      quanxianFrom: [],
      type: "tree",
      // fenUserId:null,
      fenData: [],
      defaultProps: {
        children: "children",
        label: "authName"
      },
			leftRole:{}
    }
  },
  methods: {
    getList() {
      roleUser(this.roleFrom).then((res) => {
        console.log('role_res',res.data                                                                                                                                                             ``.children);
        this.roleFrom = res.data
      })
    },
    eddOpen(row) {
      this.eddDialogFormVisible = true

      // console.log('row',row);
      this.eddFrom = {
        roleName: row.roleName,
        roleDesc: row.roleDesc,
        id: row.id
      }
    },
    edd() {
      eddRole(this.eddFrom).then((res) => {
        console.log("role_res", res)
        this.eddDialogFormVisible = false
        this.getList()
      })
    },
    del(id) {
      delRole(id).then((res) => {
        console.log("delRole", res)
        this.getList()
      })
    },
    add() {
      addRole(this.addFrom).then((res) => {
        console.log("addRole", res)
        this.addDialogFormVisible = false
        this.getList()
      })
    },
    fenOpen(row) {
      this.fenDialogFormVisible = true
      // console.log("rwo", row)
      // this.fenUserId=row.id
      // console.log('id',this.fenUserId);
    },
    handleNodeClick(data) {
      console.log(data)
    },
    fenPei() {
      fenRole(this.type).then((res) => {
        // console.log("res", res)
        this.fenData = res.data
      })
    },
		getHalfCheckedNodes(){
		// 	// this.showCheckbox=true
		// 	console.log('show',props);
		},
		// getLeftRole(){
		// 	leftRole(this.leftRole).then((res)=>{
		// 		console.log('res',res);
		// 	})
		// }
  },
  mounted() {
    this.getList()
    this.fenPei()
		// this.getLeftRole()
  }
}
</script>

<style>
</style>
