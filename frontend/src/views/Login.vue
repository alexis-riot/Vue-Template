<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent pb-5">
                    <div class="text-muted text-center mt-2 mb-3"><small>Se connecter avec</small></div>
                    <div class="btn-wrapper text-center" v-b-tooltip.bottom title="Cette fonctionnalité n'est pas encore disponible">
                        <button class="btn btn-neutral btn-icon" disabled>
                            <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                            <span class="btn-inner--text">Github</span>
                        </button>
                        <button class="btn btn-neutral btn-icon" disabled>
                            <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                            <span class="btn-inner--text">Google</span>
                        </button>
                    </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-muted text-center mb-4">
                        <small>Ou se connecter avec vos identifiants</small>
                    </div>
                    <form role="form" @submit.prevent="loginForm" method="patch">
                        <base-input
                                    name="password"
                                    label="Mot de passe"
                                    placeholder="Entrez votre mot de passe"
                                    input-classes="form-control-alternative"
                                    v-model="password"
                                    ref="someFancyName"
                        />

                        <base-checkbox class="custom-control-alternative" name="test">
                            <span class="text-muted">Se souvenir de moi</span>
                        </base-checkbox>
                        <div class="text-center">
                            <base-button type="primary" class="my-4" native-type="submit">Se connecter</base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light"><small>Mot de passe perdu?</small></a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/register" class="text-light"><small>Inscription</small></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import FormValidator from '@/plugins/form-validator/FormValidator.js';

    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            loginForm: function (vm) {
                new FormValidator("/app/login", "post", vm);
/*

                FormValidator("/app/test", vm);

                const ALLOWED_TYPE = ['INPUT', 'TEXTAREA'];
                for (var index in e.target) {
                    if (!e.target[index])
                        continue
                    if (!ALLOWED_TYPE.includes(e.target[index].tagName))
                        continue

                    console.log(e.target[index].name);
                    console.log(e.target.querySelector('[name=' + e.target[index].name + ']').closest('.form-group').__vue__)
                    console.log("----")
                }

 */
            },
        }
    }
</script>
<style>
</style>
