import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import HomeAdmin from "../pages/HomeAdmin.vue";
import AddEvent from "../pages/AddEvent.vue";
import EventListAdmin from "../pages/EventListAdmin.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/add-event",
    name: "AddEvent",
    component: AddEvent,
  },
  {
    path: "/admin",
    name: "Admin",
    component: HomeAdmin,
  },
  {
    path: "/admin/event-list",
    name: "EventList",
    component: EventListAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
