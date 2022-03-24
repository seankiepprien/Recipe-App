<template>
    <section class="flex flex-col p-3">
        <input type="text" v-model="data.filter" placeholder="Filter" class="m-auto">
    </section>
    <section class="flex flex-col p-3">
        <input type="text" v-model="data.newIngredient" placeholder="Ingredient" class="m-auto"/>
        <button @click="add(data.newIngredient)" @disabled="!data.newIngredient" class="text-center p-3 mt-10 mx-auto bg-blue-600 text-white rounded w-1/3 h-auto">Add</button>
    </section>
    <section class="p-5">
        <template v-if="!data.ingredients.length">
            <h4>No ingredients found</h4>
        </template>
        <template v-else>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead> 
                <tbody>
                    <tr v-for="ingredient in filteredIngredients" :key="ingredient">
                        <td>{{ ingredient.id }}</td>
                        <td>{{ ingredient.name }}</td>
                        <td>
                            <button @click="update(ingredient)">Update</button>
                            <button @click="remove(ingredient)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
    </section>
</template>
<script>
import { reactive, computed } from 'vue'
import { useStore } from '../store'
export default {
    setup() {
        const store = useStore()
        const data = reactive ({
            ingredients: store.ingredients,
            filter: "",
            newIngredient: ""
        });
        const filteredIngredients = computed(() =>
            data.ingredients
                .filter(ingredient => !data.filter || ingredient.name.includes(data.filter))
        );
        const add = ingredient => {
            store.addIngredient(ingredient)
        }
        const update = ingredient => {
            data.newIngredient = ingredient.name;
            remove(ingredient)
        };
        const remove = ingredient => {
            store.removeIngredient(ingredient)
        }
        return {
            filteredIngredients,
            data,
            add,
            update,
            remove
        }
    },
};
</script>