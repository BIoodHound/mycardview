<template>
    <v-app>


        <v-content>
            <v-container>
                <v-row style="height: 800px;" justify="center" align="center">
                    <v-col cols="6">
                        <router-view></router-view>
                    </v-col>

                </v-row>

            </v-container>

        </v-content>
    </v-app>
</template>