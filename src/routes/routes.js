import loadable from '@loadable/component'
import { FundOutlined } from '@ant-design/icons';
const Guide = loadable(() => import('../pages/guide'));
const UserManage = loadable(() => import('../pages/user-manage'));
const EditUser = loadable(() => import('../pages/user-manage/edit-user'));
const RoleManage = loadable(() => import('../pages/role-manage'));
const AddRole = loadable(() => import('../pages/role-manage/add-role'));
const ResouceRegister = loadable(() => import('../pages/resouce-register'));
const DepartmentManage = loadable(() => import('../pages/dictionary-manage/department'));
const BankManage = loadable(() => import('@/pages/dictionary-manage/bank'));
const PolicyCategoryManage = loadable(() => import('@/pages/dictionary-manage/policy-category'));

const PageRoutes = [
  {
    icon: <FundOutlined />,
    name: '用户权限',
    key: 'user',
    isMenu: true,//是否菜单栏显示
    children: [
      {
        name: "用户管理",
        key: 'user-manage',
        path: '/user-manage',
        component: <UserManage />,
        isMenu: true,
        children: [{
          name: "编辑用户信息",
          key: 'user-manage/edit',
          path: '/user-manage/edit',
          component: <EditUser />,
          isMenu: true,
        }]
      },
      {
        name: "角色管理",
        key: 'role-manage',
        path: '/role-manage',
        component: <RoleManage />,
        isMenu: true,
        children: [{
          name: "添加角色",
          key: 'role-manage/add',
          path: '/role-manage/add',
          component: <AddRole />,
          isMenu: true,
        }]
      },
      {
        name: "政策权限组",
        key: 'policy-permission-group',
        path: '/policy-permission-group',
        component: <RoleManage />,
        isMenu: true,
      }, {
        name: "数据权限",
        key: 'data-permission',
        path: '/data-permission',
        component: <RoleManage />,
        isMenu: true,
      },
      {
        name: '运营人员',
        key: 'operation-user-list',
        // path: '/operation-user-list',
        component: <Guide />,
        isMenu: true,
        children: [
          {
            name: '运营人员详情1',
            key: 'detail1',
            // path: '/detail',
            component: <Guide />,
            isMenu: true,
            children: [
              {
                name: '运营人员详情',
                key: 'detail',
                path: '/detail',
                component: <Guide />,
                isMenu: true,
              }
            ]
          }
        ]
      },
      {
        name: '运营角色管理',
        key: 'operation-role',
        path: '/operation-role',
        component: <Guide />,
        isMenu: true
      }
    ]
  },
  {
    icon: <FundOutlined />,
    name: '菜单管理',
    key: 'menu',
    isMenu: true,
    children: [

    ]
  },
  {
    icon: <FundOutlined />,
    name: '应用资源',
    key: 'resource',
    isMenu: true,
    children: [
      {
        name: '资源注册',
        key: 'resource-register',
        path: '/resource/register',
        component: <ResouceRegister />,
        isMenu: true,
      }, {
        name: '应用管理',
        key: 'resource-application',
        path: '/resource/application',
        component: <ResouceRegister />,
        isMenu: true,
      }
    ]
  },
  {
    icon: <FundOutlined />,
    name: '字典管理',
    key: 'dictionary',
    isMenu: true,
    children: [
      {
        name: '主题管理',
        key: 'theme',
        path: '/theme',
        isMenu: true,
        component: <Guide />
      }, {
        name: '政策分类管理',
        key: 'policy-category',
        path: '/policy-category',
        isMenu: true,
        component: <PolicyCategoryManage />
      }, {
        name: '部门管理',
        key: 'department',
        path: '/department',
        isMenu: true,
        component: <DepartmentManage />
      }, {
        name: '银行管理',
        key: 'bank',
        path: '/bank',
        isMenu: true,
        component: <BankManage />
      }
    ]
  }
]

export default PageRoutes