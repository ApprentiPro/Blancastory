import HomeView from '@/views/home/index.vue'
import SceneView from '@/views/scenarioView/index.vue'
const routes = [
    { path: '/', component: HomeView,meta:{layout:'AppLayout'}  },
    { path: '/scene', component: SceneView,meta:{layout:'AppLayout'}  },
]
export default routes
