import loadable from '@loadable/component'
import { FundOutlined } from '@ant-design/icons';
const Guide = loadable(() => import('../pages/guide'));

const PageRoutes = [
  {
    icon: <FundOutlined />,
    name: '用户权限',
    key: 'user',
    isMenu: true,//是否菜单栏显示
    children: [
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
  }
]

export default PageRoutes