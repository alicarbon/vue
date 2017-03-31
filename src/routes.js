import HomeComponent from './views/Home.vue'
import Topic1Home from './views/topic-1/section-1.vue'
import Topic21Home from './views/topic-2-1/home.vue'
import Topic22Home from './views/topic-2-2/home.vue'
import Topic23Home from './views/topic-2-3/home.vue'
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
        path: '/topic-2-1',
        component: Topic21Home
    },
    {
        path: '/topic-2-2',
        component: Topic22Home
    },
    {
        path: '/topic-2-3',
        component: Topic23Home
    },
    {
        path: '/scene/:id',
        component: Scene,
        props: true
    }
]
