<template>
    <base-layout style="margin: 0.5rem">
        <card-component 
        :imageUrl="'https://ionicframework.com/docs/img/demos/card-media.png'"
        :cardTitle="'Test'"
        :cardSubtitle="'subtitle'"
        :cardContent="'Heres a small text description for the card content. Nothing more, nothing less'"
        >
        </card-component>
        
        <card-component 
            v-for="launch in launches" 
            :key="launch.id"
            :cardTitle="launch.name"
            :cardContent="launch.details"
            :cardSubtitle="launch.date"
            :imageUrl="launch.links.patch.small"
            ></card-component>

    </base-layout>
</template>

<script lang="ts">
import CardComponent from './components/LaunchCard.vue'
import apiService from '../services/apiService'

export default {
    mounted() {
        this.getData()
    },
    data() {
        return {
            launches: null
        }
    },
    components: {
        CardComponent
    },
    methods: {
        getData(){
            apiService.getLaunches().then( launches =>{
                console.log('LAunches ---> ', launches);
                this.launches = launches.data
            }).catch( (error: String) => {
                console.log('Something went wrong --> ', error)
            })
        }
    }
}

</script>