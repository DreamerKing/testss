import loadable from '@loadable/component'
import { FundOutlined } from '@ant-design/icons';
const Guide = loadable(() => import('../pages/guide'));
const UserManage = loadable(() => import('../pages/user-manage'));
const RoleManage = loadable(() => import('../pages/role-manage'));

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
      },
      {
        name: "角色管理",
        key: 'role-manage',
        path: '/role-manage',
        component: <RoleManage />,
        isMenu: true,
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
        component: <Guide />
      }, {
        name: '部门管理',
        key: 'department',
        path: '/department',
        isMenu: true,
        component: <Guide />
      }, {
        name: '银行管理',
        key: 'bank',
        path: '/bank',
        isMenu: true,
        component: <Guide />
      }
    ]
  }
]

export default PageRoutes