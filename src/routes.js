import Home from './views/Home.vue'
import NotFound from './components/NotFound.vue'
import Ingredients from './components/Ingredients.vue'
import Recipes from './components/Recipes.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/Ingredients', component: Ingredients, meta: { title: 'Ingredients' } },
  { path: '/Recipes', component: Recipes, meta: { title: 'Recipes' } },
  { path: '/:path(.*)', component: NotFound, meta: { title: 'Not Found' } },
]
