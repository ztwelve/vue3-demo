// import { useRouter } from "vue-router"
import router from './router'

// const router = useRouter()
router.beforeEach((to, from, next) => {
    console.log("to", to)

})