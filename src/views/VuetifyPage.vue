<template>
    <base-layout>
        <v-list>
            <v-list-subheader>Components</v-list-subheader>

            <v-list-item
                v-for="(item, index) in vuetifyComponents"
                @click="goToExample(item.goTo)"
                :key="index"
                :value="item"
                color="primary"
                rounded="shaped"
            >

            <template v-slot:prepend >
                <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>{{ item.title }}</v-list-item-title>

            </v-list-item>
            
        </v-list>
    </base-layout>
</template>

<script lang="ts">
import { IonLabel } from '@ionic/vue';
import { VList, VListSubheader, VListItem, VIcon, VListItemTitle  } from 'vuetify/components';
import { RouteLocationRaw, useRouter } from 'vue-router';

export default {
    components: {
        IonLabel,
        VList,
        VListSubheader,
        VListItem,
        VIcon,
        VListItemTitle
    },
    data: () => ({
        vuetifyComponents: [
            { title: 'Cards', icon: 'mdi-cards', goTo: '/cards'},
            { title: 'Dialogs', icon: 'mdi-projector-screen-outline', goTo: '/dialogs'},
            { title: 'Expansion panels', icon: 'mdi-arrow-expand', goTo: '/expansion-panel'},
        ]
    }),
    setup: () => {
        const router = useRouter()
    },
    methods: {
        goToExample(route: RouteLocationRaw){
            this.$router.push(route)
        }
    }
}
</script>