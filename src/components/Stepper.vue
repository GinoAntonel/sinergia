<template>
  <v-stepper dark v-model="e13" vertical>
    <v-stepper-step step="1" complete>
      Selecciona una campera
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex white--text text-center align-center justify-center">
            <h1>Arma tu Campera</h1>
          </v-col>
        </v-row>
      </v-container>
      <v-item-group>
          <v-container>
            <v-row>
              <v-col
                v-for="(ite, n) in 3"
                :key="n"
                cols="12"
                md="4"
              >
                <v-item v-slot:default="{ active, toggle }">
                  <v-card
                    :color="active ? '#797a7e' : ''"
                    class="d-flex align-center"
                    @click="toggle"
                  >
                    <v-img
                      class="shrink mr-2 d-flex align-center"
                      contain
                      height="200px"
                      :src="srcss[n]"
                    >
                    <v-scroll-y-transition>
                      <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                      >
                        <v-icon
                          color="#797a7e"
                          size="48"
                          v-text="'mdi-check-circle'"
                        ></v-icon>
                      </div>
                    </v-scroll-y-transition>
                    </v-img>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="e13 = 2">Continuar</v-btn>
          </v-container>
        </v-item-group>
    </v-stepper-content>

    <v-stepper-step step="2" complete>Selecciona un estilo</v-stepper-step>

    <v-stepper-content step="2">
      <v-container>
        <v-row justify="center">
          <v-col md="4" cols="12" class="d-flex white--text text-center align-center justify-center">
            <v-card >
              <v-img
                class="shrink mr-2 d-flex align-center"
                contain
                height="200px"
                src="../assets/camperaP.png"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="800"
      >
        <v-slide-group
          v-model="model"
          center-active
          show-arrows
        >
          <v-slide-item
            v-for="n in 15"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? '#797a7e' : 'grey lighten-1'"
              class="ma-4"
              height="100"
              width="200"
              @click="toggle"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <v-img
                  class="shrink d-flex align-center"
                  contain
                  height="80px"
                  :src="msrcs[n-1]"
                >
                  <v-scroll-y-transition>
                    <div
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      <v-icon
                        color="white"
                        size="48"
                        v-text="'mdi-check-circle'"
                      ></v-icon>
                    </div>
                  </v-scroll-y-transition>
                </v-img>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
      <v-btn color="error" @click="e13 = 1">Volver</v-btn>
    </v-stepper-content>

    <v-stepper-step :rules="[() => false]" step="3">
      Ad templates
      <small>Alert message</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e13 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>

    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>


<script>
  export default {
    data () {
      return {
        srcss:[
          require('../assets/camperaP.png'),
          require('../assets/camperaP2.png'),
        ],
        msrcs:[
          require('../assets/modelo.png'),
          require('../assets/modelo2.png'),
          require('../assets/modelo3.png'),
          require('../assets/modelo4.png'),
          require('../assets/modelo5.png'),
          require('../assets/modelo6.png'),
          require('../assets/modelo7.png'),
          require('../assets/modelo8.png'),
          require('../assets/modelo9.png'),
          require('../assets/modelo10.png'),
          require('../assets/modelo11.png'),
          require('../assets/modelo12.png'),
          require('../assets/modelo13.png'),
          require('../assets/modelo14.png'),
          require('../assets/modelo15.png'),

        ],
        model: null,
        e13: 1,
      }
    },
  }
</script>