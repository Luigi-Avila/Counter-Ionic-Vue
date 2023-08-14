<template>
    <base-layout>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Accordion panel" text="Expansion panel text">
            </v-expansion-panel>
        </v-expansion-panels>
    </base-layout>
</template>

<script lang="ts">
import { VExpansionPanels, VExpansionPanel } from "vuetify/components"

export default{
    components: {
        VExpansionPanels,
        VExpansionPanel
    }
}

</script>