import { createMemoryHistory, createRouter } from "vue-router";
import MainView from "@/view/MainView.vue";
import SignUpView from "@/view/SignUpView.vue";
import ContactView from "@/view/ContactView.vue";
import AboutView from "@/view/AboutView.vue";
import AccountView from "@/view/AccountView.vue";
import CartView from "@/view/CartView.vue";
import WishListView from "@/view/WishListView.vue";
import CheckOutView from "@/view/CheckOutView.vue";
import GamepadView from "@/view/GamepadView.vue";

const routes = [
  { path: '/', component: MainView },
  { path: '/signup', component: SignUpView },
  { path: '/contact', component: ContactView },
  { path: '/about', component: AboutView },
  { path: '/account', component: AccountView },
  { path: '/cart', component: CartView },
  { path: '/wishlist', component: WishListView },
  { path: '/checkout', component: CheckOutView },
  { path: '/gamepad', component: GamepadView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
}); 
