import http from "../utils/httpRequest"

/**登录接口 */
const loginFn = (params) => http.post(http.adornUrl("/login"), { username: params.username, password: params.password })

// const Users = () => http.post(http.adornUrl("/users"))
export { loginFn }


// 获取数据
const getUsers=(params)=>http.get(http.adornUrl('/users'),{params})

// 添加
const addUser=(params)=>http.post(http.adornUrl('/users'),{username: params.username, password: params.password,email:params.email,mobile:params.mobile})

//删除
const delUser=(params)=>http.delete(http.adornUrl('/users/'+params))

// 修改
const updateUser=(params)=>http.put(http.adornUrl('/users/'+params.id),{username: params.username,email:params.email,mobile:params.mobile})

// 分配角色
// const fenUser=(params)=>http.put(http.adornUrl('/users/'+params.id+params.role_name))


// 权限列表
// 角色列表

const roleUser=(params)=>http.get(http.adornUrl('/roles'),{params})

// 编辑角色
const eddRole=(params)=>http.put(http.adornUrl('/roles/'+params.id),{roleName:params.roleName,roleDesc:params.roleDesc})

// 删除角色
const delRole=(params)=>http.delete(http.adornUrl('/roles/'+params))

// 添加角色
const addRole=(params)=>http.post(http.adornUrl('/roles'),{roleName:params.roleName,roleDesc:params.roleDesc})

// 分配权限
const fenRole=(params)=>http.get(http.adornUrl('/rights/'+params))

// 菜单权限
const leftRole=(params)=>http.get(http.adornUrl('/menus'),{params})


export {getUsers,addUser,delUser,updateUser,roleUser,eddRole,delRole,addRole,fenRole,leftRole}
// {query:this.queryInfo.query,pagesize:this.queryInfo.pagesize,pagenum:this.queryInfo.pagenum}
