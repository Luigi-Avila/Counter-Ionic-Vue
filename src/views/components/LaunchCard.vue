<template>
    <ion-card style="margin-bottom: 0.5rem;">
        <div style=" display: block; background-color: red;">
            <img alt="Launch image" :src="imageUrl" style="width: 100%; height: 100%; object-fit: contain;" />
        </div>
        <ion-card-header>
            <ion-card-title>{{ cardTitle }}</ion-card-title>
            <ion-card-subtitle>{{ cardSubtitle }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content style="text-align: justify;">
            {{ cardContent }}
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    props: {
        imageUrl: String,
        cardTitle: String,
        cardSubtitle: String,
        cardContent: String
    }
});
</script>