import http from "../utils/httpRequest"

/**登录接口 */
const loginFn = (params) => http.post(http.adornUrl("/login"), { username: params.username, password: params.password })

const Users = (data) => http.get(http.adornUrl("/users"), { params: { pagenum: data.pagenum, query: data.query, pagesize: data.pagesize } })

const addUsers = (data) => http.post(http.adornUrl("/roles"), { username: data.username, password: data.password, email: data.email, mobile: data.mobile })

const del = (data) => http.delete(http.adornUrl(`/users/${data}`))

const Edit = (data) => http.put(http.adornUrl(`users/${data.id}`), { email: data.email, mobile: data.mobile })

const Power = (data) => http.get(http.adornUrl(`/rights/${data}`))

const Role = (data) => http.get(http.adornUrl("/roles"))

const RoleEdit = (data) => http.put(http.adornUrl(`/roles/${data.id}`), { roleName: data.roleName, roleDesc: data.roleDesc })

const RoleDel = (data) => http.delete(http.adornUrl(`/roles/${data}`))


const Rights = (data) => http.post(http.adornUrl("/roles"), { roleName: data.roleName, roleDesc: data.roleDesc })

const fenRole = (params) => http.get(http.adornUrl('/rights/' + params))

export { loginFn, Users, addUsers, del, Edit, Power, Role, RoleEdit, RoleDel, Rights, fenRole }
