<template>
    <base-layout>
        <v-card style="margin: 0.5rem;" title="Tonal card" subtitle="Subtitle" text="..." variant="tonal">
            <v-card-actions>
            <v-btn color="success">Click me</v-btn>
            </v-card-actions>
        </v-card>

        <v-card style="margin: 0.5rem;" title="Outlined card" subtitle="Subtitle" text="..." variant="outlined">
            <v-card-actions>
            <v-btn color="success">Click me</v-btn>
            </v-card-actions>
        </v-card>

        <v-card style="margin: 0.5rem;" title="Default card" subtitle="Subtitle" text="...">
            <v-card-actions>
            <v-btn color="success">Click me</v-btn>
            </v-card-actions>
        </v-card>

    </base-layout>
    
    
</template>

<script lang="ts">

import { VCard, VCardActions, VBtn } from "vuetify/components"

export default {
    components: {
        VCard,
        VCardActions,
        VBtn
    },
};
</script>
