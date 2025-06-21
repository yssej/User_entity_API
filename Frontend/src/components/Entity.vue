<template>
  <div>
    <div class="flex justify-center m-5">
      <button
        @click="showModal = true"
        class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
      >
        Create entity
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
              Create entity
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
          <form @submit.prevent="handleCreateEntity">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" v-model="newEntity.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your name" required>
              </div>
              <div>
                <label for="siret" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Siret</label>
                <input type="text" name="siret" id="siret" v-model="newEntity.siret" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your firstname" required>
              </div>
              <div>
                <label for="keyLicence" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keylicence</label>
                <input type="text" name="keyLicence" id="keyLicence" v-model="newEntity.keyLicence" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" maxlength="20" placeholder="ex: fr" required>
              </div>
              <div>
                <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                <input type="text" name="website" id="website" v-model="newEntity.website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" maxlength="100" placeholder="yourmail@mail.xx" required>
              </div>
              <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" v-model="newEntity.description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>                    
              </div>
            </div>
            <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Add new entity
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
              Create entity
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
          <form @submit.prevent="handleUpdateEntity">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" v-model="editEntity.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your name" required>
              </div>
              <div>
                <label for="siret" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Siret</label>
                <input type="text" name="siret" id="siret" v-model="editEntity.siret" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your firstname" required>
              </div>
              <div>
                <label for="keyLicence" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keylicence</label>
                <input type="text" name="keyLicence" id="keyLicence" v-model="editEntity.keyLicence" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" maxlength="20" placeholder="ex: fr" required>
              </div>
              <div>
                <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                <input type="text" name="website" id="website" v-model="editEntity.website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" maxlength="100" placeholder="yourmail@mail.xx" required>
              </div>
              <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" v-model="editEntity.description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>                    
              </div>
            </div>
            <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Update entity
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="overflow-x-auto w-full">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
          <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Siret</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KeyLicence</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
          </tr>
      </thead>
      <tbody class="divide-y divide-gray-200" v-for="entity in entityList" :key="entity.id">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">{{ entity.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ entity.description }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ entity.siret }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ entity.keyLicence }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ entity.website }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button @click="startEdit(entity)" class="px-4 py-2 font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:shadow-outline-yellow active:bg-yellow-600 transition duration-150 ease-in-out">
                <i class="fas fa-pencil-alt"></i>
              </button>
              <button @click="deleteEntity(entity.id)" class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
      </tbody>
    </table>
    <div class="flex justify-center mt-4">
      <button @click="goToPage(page - 1)" :disabled="page <= 1" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50">Previous</button>
      <span class="mx-2">Page {{ page }} of {{ totalPages }}</span>
      <button @click="goToPage(page + 1)" :disabled="page >= totalPages" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50">Next</button>
  </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import entityService from '../services/entity.service'

  const showModal = ref(false)
  const modalUpdate = ref(false)

  const entityList = ref([])  
  const page = ref(1)
  const limit = ref(5)
  const totalPages = ref(1)
  const newEntity = ref({ name: '', description: '', siret: '', keyLicence: '', website: '' })
  const editId = ref(null)
  const editEntity = ref({ name: '', description: '', siret: '', keyLicence: '', website: '' })
  const errorMsg = ref('')

  const fetchEntities = async () => {
    const res = await entityService.getAll(page.value, limit.value)
    console.log(res)
    entityList.value = res.data.data
    totalPages.value = res.data.totalPages
  }

  const goToPage = (p) => {
    if (p >= 1 && p <= totalPages.value) {
      page.value = p
      fetchEntities()
    }
  }

  const handleCreateEntity = async () => {
    console.log('Creating entity:', newEntity.value)
    try {
      await entityService.create(newEntity.value)
      newEntity.value = { name: '', description: '', siret: '', keyLicence: '', website: '' }
      showModal.value = false
      fetchEntities()
    } catch (err) {
      errorMsg.value = err.response?.data?.error || 'Erreur lors de la création de l\'utilisateur.'
    }
  }

  const handleUpdateEntity = async () => {
    console.log('Creating entity:', editEntity.value)
    try {
      await entityService.update(editId.value, editEntity.value)
      editEntity.value = { name: '', description: '', siret: '', keyLicence: '', website: '' }
      modalUpdate.value = false
      fetchEntities()
    } catch (err) {
      errorMsg.value = err.response?.data?.error || 'Erreur lors de la création de l\'utilisateur.'
    }
  }

  const startEdit = (entity) => {
    editId.value = entity.id
    editEntity.value = { name: entity.name, description: entity.description, siret: entity.siret, keyLicence: entity.keyLicence, website: entity.website }
    modalUpdate.value = true
  }

  const deleteEntity = async (id) => {
    if (confirm('Voulez-vous vraiment supprimer cet entité ?')) {
      await entityService.delete(id)
      fetchEntities()
    }
  }

  onMounted(fetchEntities)
  </script>