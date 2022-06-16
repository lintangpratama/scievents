import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import firebaseConfig from "../firebaseConfig";


initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
