<template>
  <div>
    <div class="flex justify-center m-5">
      <button
        @click="showModal = true"
        class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
      >
        Créer association
      </button>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <!-- Modal header -->
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Creation d'une association utilisateur/entité
            </h3>
            <button
              type="button"
              @click="showModal = false"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form @submit.prevent="handleCreateUserEntity">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
                <select v-model="newUserEntity.userId" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option v-for="user in userList" :key="user.id" :value="user.id">
                    {{ user.name }}
                  </option>                
                </select>
              </div>
              <div>
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Entité</label>
                <select v-model="newUserEntity.entityId" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option disabled value="">Sélectionner une entité</option>
                  <option v-for="entity in availableEntities" :key="entity.id" :value="entity.id">
                    {{ entity.name }}
                  </option>
                </select>
              </div>
            </div>
            <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Add new entityUser
            </button>
          </form>
        </div>
      </div>
    </div>

    <div
      v-if="modalUpdate"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <!-- Modal header -->
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Create user
            </h3>
            <button
              type="button"
              @click="modalUpdate = false"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form @submit.prevent="handleUpdateUser">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
                <select v-model="editUserEntity.userId" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option v-for="user in userList" :key="user.id" :value="user.id">
                    {{ user.name }}
                  </option>                
                </select>
              </div>
              <div>
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Entité</label>
                <select v-model="editUserEntity.entityId" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option v-for="entity in entityList" :key="entity.id" :value="entity.id">
                    {{ entity.name }}
                  </option>
                </select>
              </div>
            </div>
            <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Update user
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

    <!-- Users Table -->
  <table class="min-w-full divide-y divide-gray-200">
    <thead>
        <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UserId</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EntityId</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-gray-200" v-for="userEntity in userEntitiesList" :key="userEntity.id">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ userList.find(u => u.id === userEntity.userId)?.name || userEntity.userId }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ entityList.find(e => e.id === userEntity.entityId)?.name || userEntity.entityId }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button @click="startEdit(userEntity)" class="px-4 py-2 font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:shadow-outline-yellow active:bg-yellow-600 transition duration-150 ease-in-out">
              <i class="fas fa-pencil-alt"></i>
            </button>
            <button @click="deleteUserEntity(userEntity.id)" class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import userEntityService from '../services/userEntity.service'
import usersService from '../services/users.service'
import entitiesService from '../services/entity.service'
import { computed } from 'vue'

const showModal = ref(false)
const modalUpdate = ref(false)

const userEntitiesList = ref([])
const userList = ref([])
const entityList = ref([])
const newUserEntity = ref({ userId: 0, entityId: 0 })
const editId = ref(null)
const editUserEntity = ref({ userId: 0, entityId: 0 })
const errorMsg = ref('')

const fetchUserEntities = async () => {
  const res = await userEntityService.getAll()
  console.log(res)
  userEntitiesList.value = res.data
  const resUsers = await usersService.getAll()
  const resEntities = await entitiesService.getAll()
  userList.value = resUsers.data
  entityList.value = resEntities.data
}

const availableEntities = computed(() => {
  if (!newUserEntity.value.userId) return entityList.value
  const usedEntityIds = userEntitiesList.value
    .filter(ue => ue.userId === newUserEntity.value.userId)
    .map(ue => ue.entityId)
  return entityList.value.filter(entity => !usedEntityIds.includes(entity.id))
})

const handleCreateUserEntity = async () => {
  console.log('Creating user:', newUserEntity.value)
  try {
    await userEntityService.create(newUserEntity.value)
    newUserEntity.value = { userId: 0, entityId: 0 }
    showModal.value = false
    fetchUserEntities()
  } catch (err) {
    errorMsg.value = err.response?.data?.error || 'Erreur lors de la création de l\'utilisateur.'
  }
}

const handleUpdateUser = async () => {
  console.log('Creating user:', editUserEntity.value)
  try {
    await userEntityService.update(editId.value, editUserEntity.value)
    editUserEntity.value = { userId: 0, entityId: 0 }
    modalUpdate.value = false
    fetchUserEntities()
  } catch (err) {
    errorMsg.value = err.response?.data?.error || 'Erreur lors de la création de l\'utilisateur.'
  }
}

const startEdit = (userEntity) => {
  editId.value = userEntity.id
  editUserEntity.value = {
    userId: userEntity.userId,
    entityId: userEntity.entityId
  }
  modalUpdate.value = true
}

const deleteUserEntity = async (id) => {
  if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
    await userEntityService.delete(id)
    fetchUserEntities()
  }
}

onMounted(fetchUserEntities)
</script>