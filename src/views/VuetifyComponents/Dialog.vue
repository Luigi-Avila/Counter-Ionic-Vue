<template>
    <base-layout style="padding: 0.5rem;">
        <v-dialog
            v-model="dialog"
            width="auto"
        >
            <template  v-slot:activator="{ props }">
                <v-btn 
                color="primary"
                v-bind="props">
                    Open Dialog
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum perferendis magni perspiciatis. Distinctio soluta asperiores ex perferendis atque voluptates, totam itaque eius, dolorum, quod laudantium! Aperiam, dolorem. Vel, laudantium?
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false"> Close </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="dialogFullScreen"
            fullscreen
            width="auto"
        >
            <template  v-slot:activator="{ props }">
                <v-btn 
                color="primary"
                v-bind="props"
                style="margin-top: 0.5rem;">
                    Open Dialog Full Screen
                </v-btn>
            </template>

            <v-card>
                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum perferendis magni perspiciatis. Distinctio soluta asperiores ex perferendis atque voluptates, totam itaque eius, dolorum, quod laudantium! Aperiam, dolorem. Vel, laudantium?
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialogFullScreen = false"> Close </v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>

    </base-layout>
    
</template>

<script lang="ts">

import { VDialog, VCard, VCardText, VCardActions, VBtn } from "vuetify/components"

export default {
    data () {
        return{
            dialog: false,
            dialogFullScreen: false
        }
    },
    components: {
        VDialog,
        VBtn,
        VCard,
        VCardText,
        VCardActions
    },
};

// v-model="dialog"
//             scrollable fullscreen 
//             persistent :overlay="false"
//             max-width="500px"
//             transition="dialog-transition"
</script>
