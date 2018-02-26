<template>
    <q-page padding>
        <div class="main-grid">
            <div class="main-layout header">
                <q-toolbar color="primary" class="round-borders">
                    <q-icon name="person" size="2em" />
                    <q-toolbar-title>Signup</q-toolbar-title>
                </q-toolbar>
            </div>
            <div class="main-layout user-info">
                <q-card class="fit">
                    <q-card-title>User Info</q-card-title>
                    <q-card-main>
                        <div class="card-user-info">
                            <q-input v-model="signup.firstname" float-label="Firstname" />
                            <q-input v-model="signup.lastname" float-label="Lastname" />

                            <q-input v-model="phone.value" type="tel" float-label="Phone" :after="[{
                            icon: 'add', content: true, handler: () => { opened = true } }]" />

                            <q-input v-model="email.value" type="email" float-label="Email" :after="[{
                            icon: 'add', content: true, handler: addEmail }]" />

                            <q-input v-model="signup.username" float-label="Username" />
                            <q-field :count="16">
                                <q-input v-model="signup.password" type="password" float-label="Password" />
                                <q-input v-model="confirmPassword" type="password" />
                            </q-field>
                        </div>
                    </q-card-main>
                </q-card>
            </div>
            <div class="main-layout address">
                <q-card class="fit">
                    <q-card-title>Address</q-card-title>
                    <q-card-main>
                        <div class="card-address">
                            <q-input v-model="address.address1" float-label="Address 1" />
                            <q-input v-model="address.address2" float-label="Address 2" />
                            <q-input v-model="address.city" float-label="City" />
                            <q-input v-model="address.state" float-label="State" />
                            <q-input v-model="address.zip" type="tel" float-label="Zip" />
                            <q-input v-model="address.county" float-label="County" />
                            <q-input v-model="address.country" float-label="Country" />
                        </div>
                    </q-card-main>
                </q-card>
            </div>
            <div class="main-layout summary">
                <q-card>
                    <q-card-title v-if="summary">Summary</q-card-title>
                    <q-card-main v-if="summary">
                        <div class="nested-grid-1 summary-content">
                            <div class="phones" v-if="signup.phones.length">
                                <q-list highlight inset-separator dense>
                                    <q-list-header>Phones</q-list-header>
                                    <q-item v-for="(phone, index) in signup.phones" :key="index">
                                        <q-item-side icon="phone"/>
                                        <q-item-main :label="phone.value" />
                                        <q-item-side right :stamp="phone.type" />
                                    </q-item>
                                </q-list>
                            </div>
                            <div class="emails" v-if="signup.emails.length">
                                <q-list highlight inset-separator dense>
                                    <q-list-header>Emails</q-list-header>
                                    <q-item v-for="(email, index) in signup.emails" :key="index">
                                        <q-item-side icon="email"/>
                                        <q-item-main :label="email.value" />
                                        <q-item-side right :stamp="email.type" />
                                    </q-item>
                                </q-list>
                            </div>
                        </div>
                    </q-card-main>
                    <q-card-separator v-if="summary"></q-card-separator>
                    <q-card-actions>
                        <div class="nested-grid-1 card-actions fit">
                            <q-btn outline color="primary" label="signup" size="1em" @click="submit" />
                        </div>
                    </q-card-actions>
                </q-card>
            </div>
            <div class="main-layout footer"></div>
        </div>
        <q-modal v-model="opened" no-backdrop-dismiss no-esc-dismiss>
            <q-toolbar color="primary">
                <q-icon name="phone" size="2em" />
                <q-toolbar-title>
                    Select Phone Type
                </q-toolbar-title>
            </q-toolbar>
            <q-option-group type="radio" color="secondary" v-model="phone.type" :options="phonetypes" />
            <q-btn flat dense color="red" @click="opened = false" label="Cancel" />
            <q-btn flat dense color="green" @click="() => { opened = false; addPhone() }" label="Save" />
        </q-modal>
    </q-page>
</template>

<script>
    export default {
		data () {
			return {
				phonetypes: [
					{ label: 'Home', value: 'Home' },
					{ label: 'Mobile', value: 'Mobile' },
					{ label: 'Work', value: 'Work' }
				],
				opened: false,
				signup: {
					firstname: null,
					lastname: null,
					phones: [],
					emails: [],
					username: null,
					password: null,
					addresses: []
				},
				confirmPassword: null,
				phone: {
					type: 'Mobile',
					value: null
				},
				email: {
					type: 'Primary',
					value: null
				},
				address: {
					type: 'Home',
					address1: null,
					address2: null,
					city: null,
					state: null,
					zip: null,
					county: null,
					country: null
				}
			}
		},
        computed: {
			summary() {
				if(this.signup.phones.length || this.signup.emails.length) {
					return true;
                }
            }
        },
		methods: {
			submit() {
				if(this.phone) {
					this.addPhone();
                }
                if(this.email) {
					this.addEmail();
                }
                if(this.address) {
					this.addAddress();
                }
                // call server and pass signup object to signup client.
			},
			addPhone() {
				this.signup.phones.push(Object.assign({}, this.phone));
				this.reset(this.phone);
			},
			addEmail() {
				this.signup.emails.push(Object.assign({}, this.email));
				this.reset(this.email);
			},
			addAddress() {
				this.signup.addresses.push(Object.assign({}, this.address));
				this.reset(this.address);
			},
			reset(obj) {
				for (let key in obj) {
					obj[key] = null;
				}
			}
		}
	};
</script>

<style>
    .main-grid {
        display: grid;
        grid-gap: .5em;
        grid-template-areas:
                "header header"
                "user-info address"
                "summary summary"
                "footer footer";
    }
    .main-layout {
        /*border: .1em solid red;*/
    }
    .nested-grid-1 {
        /*border: .1em solid greenyellow;*/
    }
    .header {
        grid-area: header;
    }
    .user-info {
        grid-area: user-info;
    }
    .address {
        grid-area: address;
    }
    .summary {
        grid-area: summary;
    }
    .summary .card-actions {
        display: grid;
        justify-items: end;
    }
    .summary .summary-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
        grid-gap: .1em;
    }
    .footer {
        grid-area: footer;
        min-height: 5em;
    }

    .card-address, .card-user-info {
        display: grid;
        grid-row-gap: 1em;
    }

    @media screen and (max-width: 768px) {
        .main-grid {
            grid-template-areas:
                    "header header"
                    "user-info user-info"
                    "address address"
                    "summary summary"
                    "footer footer";
        }
        .summary .card-actions {
            justify-items: stretch;
        }
    }
</style>