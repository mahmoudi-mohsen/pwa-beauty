import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import MicroGallery from "@/views/MicroGallery";
import About from "@/views/About";
import Contact from "@/views/Contact";
import HairGallery from "@/views/HairGallery";
import Braids from "@/views/Braids";
import Training from "@/views/Training";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/microGallery',
    name: 'MicroGallery',
    component: MicroGallery
  },
  {
    path: '/hairGallery',
    name: 'HairGallery',
    component: HairGallery
  },
  {
    path: '/braids',
    name: 'Braids',
    component: Braids
  },
  {
    path: '/training',
    name: 'Training',
    component: Training
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
