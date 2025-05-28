<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Users</h2>

    <!-- Users Table -->
    <table >
      <thead>
        <tr>
          <th class="py-2 px-4 border">ID</th>
          <th class="py-2 px-4 border">Name</th>
          <th class="py-2 px-4 border">First Name</th>
          <th class="py-2 px-4 border">Email</th>
          <th class="py-2 px-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="py-2 px-4 border">{{ user.id }}</td>
          <td class="py-2 px-4 border">
            <input v-if="editId === user.id" v-model="editUser.name" class="border p-1 rounded" />
            <span v-else>{{ user.name }}</span>
          </td>
          <td class="py-2 px-4 border">
            <input v-if="editId === user.id" v-model="editUser.firstName" class="border p-1 rounded" />
            <span v-else>{{ user.firstName }}</span>
          </td>
          <td class="py-2 px-4 border">
            <input v-if="editId === user.id" v-model="editUser.email" class="border p-1 rounded" />
            <span v-else>{{ user.email }}</span>
          </td>
          <td class="py-2 px-4 border">
            <button v-if="editId === user.id" @click="updateUser(user.id)" class="bg-green-500 text-white px-2 py-1 rounded mr-2">Save</button>
            <button v-if="editId === user.id" @click="cancelEdit" class="bg-gray-400 text-white px-2 py-1 rounded mr-2">Cancel</button>
            <button v-else @click="startEdit(user)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
            <button @click="deleteUser(user.id)" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([
    { name: 'Nom1', firstName: 'F1', email: 'aaa', password: 'fdqdfqs' },
    { name: 'Nom2', firstName: 'F2', email: 'bbb', password: 'fdqdfqs' },
    { name: 'Nom3', firstName: 'F3', email: 'ccc', password: 'fdqdfqs' },
    { name: 'Nom4', firstName: 'F4', email: 'ddd', password: 'fdqdfqs' }
])
const newUser = ref({ name: '', firstName: '', email: '', password: '' })
const editId = ref(null)
const editUser = ref({ name: '', firstName: '', email: '' })

const fetchUsers = async () => {
  const res = await axios.get('/api/users')
  console.log(res)
  users.value = res.data
}

const createUser = async () => {
  await axios.post('/api/users', newUser.value)
  newUser.value = { name: '', firstName: '', email: '', password: '' }
  fetchUsers()
}

const startEdit = (user) => {
  editId.value = user.id
  editUser.value = { name: user.name, firstName: user.firstName, email: user.email }
}

const cancelEdit = () => {
  editId.value = null
  editUser.value = { name: '', firstName: '', email: '' }
}

const updateUser = async (id) => {
  await axios.put(`/api/users/${id}`, editUser.value)
  editId.value = null
  fetchUsers()
}

const deleteUser = async (id) => {
  await axios.delete(`/api/users/${id}`)
  fetchUsers()
}

// onMounted(fetchUsers)
</script>