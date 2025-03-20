import {
  DashboardOutlined,
  AppstoreOutlined,
  MailOutlined,
  BulbOutlined,
  ShoppingCartOutlined, PlusCircleOutlined,

} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const appsNavTree = [{
  key: 'apps',
  path: `${APP_PREFIX_PATH}/apps`,
  title: 'sidenav.apps',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'apps-project',
      path: `${APP_PREFIX_PATH}/apps/project`,
      title: 'sidenav.apps.project',
      icon: BulbOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-project-list',
          path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
          title: 'sidenav.apps.project.list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
          title: 'sidenav.apps.project.scrumboard',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-collections',
          path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
          title: 'sidenav.apps.project.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-combo',
          path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
          title: 'sidenav.apps.project.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-mail',
      path: `${APP_PREFIX_PATH}/apps/mail/inbox`,
      title: 'sidenav.apps.mail',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'extra',
      path: `${APP_PREFIX_PATH}/pages`,
      title: 'sidenav.pages',
      icon: PlusCircleOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'extra-pages-list',
          path: `${APP_PREFIX_PATH}/apps/user-list`,
          title: 'sidenav.pages.userlist',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-productList',
          path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree,
]

export default navigationConfig;
