<template>
    <v-container>
        <h2>Entre em Contato com Denize Santos</h2>
        <v-form ref="form">
            <v-text-field label="Nome" v-model="name" required></v-text-field>
            <v-text-field label="E-mail" v-model="email" required></v-text-field>
            <v-textarea label="Mensagem" v-model="message" required></v-textarea>
            <v-btn color="primary" @click="sendContact">Enviar</v-btn>
        </v-form>

        <h3>Redes Sociais</h3>
        <v-btn
            v-for="(link, name) in socialLinks"
            :key="name"
            :href="link"
            target="_blank"
            icon
        >
            <v-icon v-if="name === 'facebook'" color="blue">mdi-facebook</v-icon>
            <v-icon v-else-if="name === 'instagram'" color="purple">mdi-instagram</v-icon>
            <v-icon v-else color="green">mdi-whatsapp</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                message: '',
                socialLinks: {
                facebook: 'https://facebook.com/denizesantos',
                instagram: 'https://instagram.com/denizesantos',
                whatsapp: 'https://wa.me/551999999999'
                }
            };
        },
        methods: {
            sendContact() {
                if (this.$refs.form.validate()) {
                alert('Mensagem enviada com sucesso!');
                }
            }
            }
    };
</script>
