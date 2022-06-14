import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import HomeAdmin from "../pages/HomeAdmin.vue";
import AddEvent from "../pages/AddEvent.vue";
import EventListAdmin from "../pages/EventListAdmin.vue";
import AllEvents from "../pages/AllEvents.vue";
import DetailEvent from "../pages/Details.vue";


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
    path: "/events",
    name: "Events",
    component: AllEvents,
  },
  {
    path: "/events/:eventId",
    name: "DetailEvent",
    component: DetailEvent,
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
