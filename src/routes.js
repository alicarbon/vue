import HomeComponent from './views/Home.vue'
import Topic1Home from './views/topic-1/home.vue'
import Topic2Home from './views/topic-2/home.vue'
import Topic3Home from './views/topic-3/home.vue'
import Topic4Home from './views/topic-4/home.vue'
const Scene = {
    props:['id'],
    template: `<div>This is scene {{ id }}</div>`
}

// set up routes
export default [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/topic-1',
        component: Topic1Home
    },
    {
        path: '/topic-2',
        component: Topic2Home
    },
    {
        path: '/topic-3',
        component: Topic3Home
    },
    {
        path: '/topic-4',
        component: Topic4Home
    },
    {
        path: '/scene/:id',
        component: Scene,
        props: true
    }
]
