<template>
    <nav class="flex">
        <router-link to="/" class="p-4 text-xl lg:text-6xl text-blue-600 font-bold">RecipeBook</router-link>
        <ul class="text-center list-none flex p-2 lg:text-4xl text-gray-900 font-bold">
            <li v-for="route in routes" :key="route.path" class="p-2">
                <router-link :to="route.to" :class="{ active: isActive(route.to) }">{{ route.text }}</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const routes = [
            { to: "/ingredients", text: "Ingredients" },
            { to: "/Recipes", text: "Recipes" }
        ];
        const router = useRouter()
        const activeRoute = computed(() => router.currentRoute.value.path)
        const isActive = path => path === activeRoute.value
        return { isActive, routes }
    },
}
</script>