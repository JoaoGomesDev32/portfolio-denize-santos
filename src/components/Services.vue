<!-- Services.vue -->
<template>
    <v-container id="services" class="py-10">
        <h2 class="text-center mb-6">Nossos Serviços</h2>
        <v-row>
        <v-col v-for="service in services" :key="service.title" cols="12" md="4">
            <v-card>
            <v-img :src="service.image" height="200px"></v-img>
            <v-card-title>{{ service.title }}</v-card-title>
            <v-card-text>{{ service.description }}</v-card-text>
            </v-card>
        </v-col>
        </v-row>
    </v-container></template><script>export default {
data() {
    return {
        services: [
            { title: 'Consultoria', description: 'Consultoria em produtos de tinta.', image: 'path/to/image1.jpg' },
            { title: 'Vendas Diretas', description: 'Vendas de tintas diretamente para você.', image: 'path/to/image2.jpg' },
            { title: 'Suporte', description: 'Assistência técnica pós-venda.', image: 'path/to/image3.jpg' }
        ]
    };
}
};
</script>
