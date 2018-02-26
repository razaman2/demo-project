<template>
  <q-page padding>
    <div class="fixed-center" style="min-width: 35em">
        <div class="grid-container">
            <q-toolbar color="primary" class="round-borders">
                <q-icon name="person" size="2em" />
                <q-toolbar-title>Login</q-toolbar-title>
            </q-toolbar>
            <q-card>
                <q-card-main>
                    <div class="login-inputs">
                        <q-input v-model="email.value" type="email" float-label="Email" />
                        <q-input v-model="password" type="password" float-label="Password" />
                    </div>
                </q-card-main>
                <q-card-separator></q-card-separator>
                <q-card-actions>
                    <div class="card-actions fit">
                        <q-btn outline color="primary" label="login" size="1em" @click="submit" />
                        <q-btn outline color="primary" label="signup" size="1em" @click="submit" />
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
    .card-actions {
        display: grid;
        align-items: stretch;
    }
    .login-inputs {
        display: grid;
        grid-row-gap: 3em;
    }
</style>
