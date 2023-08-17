<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/home">
                    <ion-icon :icon="homeOutline" />
                    <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="counter" href="/counter">
                    <ion-icon :icon="serverOutline" />
                    <ion-label>Counter</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="vuetify" href="/vuetify">
                    <ion-icon :icon="logoVue"></ion-icon>
                    <ion-label>Vuetify</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="spacex" href="/spacex">
                    <ion-icon :icon="rocket"></ion-icon>
                    <ion-label>Space X</ion-label>
                </ion-tab-button>

            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
} from "@ionic/vue";

import { homeOutline, serverOutline, logoVue, rocket } from "ionicons/icons";

export default {
    components: {
        IonPage,
        IonTabs,
        IonRouterOutlet,
        IonTabBar,
        IonTabButton,
        IonLabel,
        IonIcon,
    },
    data() {
        return {
            homeOutline,
            serverOutline,
            rocket,
            logoVue
        };
    },
};
</script>
