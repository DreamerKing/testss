import { FundOutlined } from '@ant-design/icons';

export default [
  {
    label: '用户权限',
    key: 'permission',
    children: [
      {
        label: '用户管理',
        type: 'permission',
        key: '/permission/user',
      },
      {
        label: '角色管理',
        type: 'permission',
        key: '/permission/role',
      },
      {
        label: '政策权限组',
        type: 'permission',
        key: '/permission/group',
      },
      {
        label: '数据权限',
        type: 'permission',
        key: '/permission/data',
      },
    ]
  },
  /*  {
     label: '菜单管理',
     key: 'menu',
     children: [
       {
         label: '菜单管理',
         key: '/menu/manage',
       }]
   }, */
  {
    label: '应用资源',
    key: 'resource',
    children: [
      {
        label: '资源注册',
        key: '/resource/register',
      },
      {
        label: '应用管理',
        key: '/resource/application',
      }
    ]
  },

  /*   {
      label: '消息管理',
      key: 'notification',
      children: [
        {
          label: '消息管理',
          key: '/notification/manage',
        }]
    },
    {
      label: '日志管理',
      key: 'log',
      children: [
        {
          label: '用户行为',
          key: '/log/user',
        }, {
          label: '管理员操作',
          key: '/log/admin',
        }]
    },
    {
      label: '字典管理',
      key: 'dictionary',
      children: [
        {
          label: '字典管理',
          key: '/dictionary/manage',
        }]
    }, */
]