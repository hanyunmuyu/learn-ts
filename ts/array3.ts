interface IRole {
    id: number
    roleName: string
    createdAt: string
    updatedAt: string
}

let jsonStr = `

[{
\t"id": 397,
\t"roleName": "超级管理员1986",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-24T13:16:43.000000Z"
}, {
\t"id": 396,
\t"roleName": "编辑197",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 395,
\t"roleName": "超级管理员197",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 394,
\t"roleName": "编辑196",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 393,
\t"roleName": "超级管理员196",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 392,
\t"roleName": "编辑195",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 391,
\t"roleName": "超级管理员195",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 390,
\t"roleName": "编辑194",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 389,
\t"roleName": "超级管理员194",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 388,
\t"roleName": "编辑193",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 387,
\t"roleName": "超级管理员193",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 386,
\t"roleName": "编辑192",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 385,
\t"roleName": "超级管理员192",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 384,
\t"roleName": "编辑191",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}, {
\t"id": 383,
\t"roleName": "超级管理员191",
\t"createdAt": "2020-10-23T01:47:22.000000Z",
\t"updatedAt": "2020-10-23T01:47:22.000000Z"
}]
`
const roleList: IRole[] = <Array<IRole>>JSON.parse(jsonStr)
console.log(roleList)
