import Vue from 'vue'
import VueRouter from 'vue-router'

// Login page
import Login from '@/components/Login'

// Main structure (once logged in)
import LeftSidebar from '@/components/shared/left_sidebar/leftSidebar'
import PageHeader from '@/components/shared/page-header'

// Main sections
import Monitoring from '@/components/monitoring/Monitoring'
import Troubleshooting from '@/components/troubleshooting/Troubleshooting'
import CommandLog from '@/components/troubleshooting/CommandLog'
import Configuration from '@/components/configuration/Configuration'
import NodeStatus from '@/components/node/NodeStatus'
import ResourceStatus from '@/components/resources/resourceStatus'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      components: {
        default: Monitoring,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/monitoring',
      components: {
        default: Monitoring,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/troubleshooting/reports',
      components: {
        default: Troubleshooting,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/troubleshooting/commandLog',
      components: {
        default: CommandLog,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/configuration',
      components: {
        default: Configuration,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/nodeStatus',
      components: {
        default: NodeStatus,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    },
    {
      path: '/resourceStatus',
      components: {
        default: ResourceStatus,
        'page-header': PageHeader,
        'left-sidebar': LeftSidebar
      }
    }
  ]
})
