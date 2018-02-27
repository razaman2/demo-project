<template>
  <q-page padding>
      <div class="grid-container">
          <div class="login-header">
              <q-toolbar color="primary" class="round-borders">
                  <q-icon name="person" size="2em" />
                  <q-toolbar-title>Login</q-toolbar-title>
              </q-toolbar>
          </div>
          <div class="login-form">
              <q-card>
                  <q-card-main>
                      <div class="form-inputs">
                          <q-input v-model="email.value" type="text" float-label="Username" />
                          <q-input v-model="password" type="password" float-label="Password" />
                      </div>
                  </q-card-main>
                  <q-card-separator></q-card-separator>
                  <q-card-actions>
                      <div class="form-buttons">
                          <q-btn outline color="primary" label="login" size="1em" @click="" />
                          <q-btn outline color="primary" label="signup" size="1em" @click="" />
                      </div>
                  </q-card-actions>
              </q-card>
          </div>
      </div>
  </q-page>
</template>

<script>
export default {
	data () {
		return {
			password: null,
			email: {
				type: null,
				value: null
            }
        }
    }
}
</script>

<style>
    .grid-container {
        display: grid;
        grid-gap: .5em;
    }
    .login-header {

    }
    .login-form {

    }
    .form-inputs {
        display: grid;
        grid-row-gap: 1em;
    }
    .form-buttons {
        display: grid;
        grid-template-columns: 3fr 1fr;
        width: 100%;
    }
</style>
