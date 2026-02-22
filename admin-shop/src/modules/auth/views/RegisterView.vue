<template>
  <h1 class="text-2xl font-semibold mb-4">Nueva Cuenta</h1>
  <form @submit.prevent="onRegister" method="POST">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="fullName" class="block text-gray-600">Nombre</label>
      <input
        v-model="myForm.fullName"
        ref="fullNameInputRef"
        type="text"
        id="fullName"
        name="fullName"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Email</label>
      <input
        v-model="myForm.email"
        ref="emailInputRef"
        type="email"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Contraseña</label>
      <input
        v-model="myForm.password"
        ref="passwordInputRef"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">¿Has olvidado la contraseña?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Registro
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Incia sesión</RouterLink>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../storres/auth.store';
import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const toast = useToast();

const fullNameInputRef = ref<HTMLInputElement>();
const emailInputRef = ref<HTMLInputElement>();
const passwordInputRef = ref<HTMLInputElement>();

const myForm = reactive({
  fullName: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  if (myForm.fullName == '') {
    return fullNameInputRef.value?.focus();
  }
  if (myForm.email == '') {
    return emailInputRef.value?.focus();
  }
  if (myForm.password == '') {
    return passwordInputRef.value?.focus();
  }
  console.log('en On Register');
  const result = await authStore.register(myForm.fullName, myForm.email, myForm.password);
  toast.success('Usuario creado correctamente');
  console.log('Desde register view', result);
};
</script>
