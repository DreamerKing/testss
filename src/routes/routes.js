import loadable from '@loadable/component';
import Framework from '@/layouts/framework';
const UserManage = loadable(() => import('@/pages/user-manage'));
const EditUser = loadable(() => import('@/pages/user-manage/edit-user'));
const RoleManage = loadable(() => import('@/pages/role-manage'));
const AddRole = loadable(() => import('@/pages/role-manage/add-role'));
const ResouceRegister = loadable(() => import('@/pages/resouce-register'));
const Login = loadable(() => import('@/pages/login'));

export default [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Framework />,
    children: [
      {
        name: '用户权限',
        path: 'permission',
        children: [
          {
            name: "用户管理",
            path: 'user',
            element: <UserManage />,
            children: [{
              name: "编辑用户信息",
              path: 'edit',
              element: <EditUser />,
            }]
          },
          {
            name: "角色管理",
            path: 'role',
            element: <RoleManage />,
            children: [{
              name: "添加角色",
              path: 'add',
              element: <AddRole />,
            }]
          },
          {
            name: "政策权限组",
            path: 'group',
            element: <RoleManage />,
          }, {
            name: "数据权限",
            path: 'data',
            element: <RoleManage />,
          },

        ]
      },
      {
        name: '应用资源',
        path: 'resource',
        children: [
          {
            name: '资源注册',
            path: 'register',
            element: <ResouceRegister />,
          },
          {
            name: '应用管理',
            path: 'application',
            element: <ResouceRegister />,
          }
        ]
      },
      {
        path: '*',
        element: <div className="FBV FBAC FBJC" style={{ fontSize: 100 }} > 404</div >
      }
    ],
  },
];