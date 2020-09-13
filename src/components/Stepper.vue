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
                v-for="(ite, n) in 2"
                :key="n"
                cols="12"
                md="6"
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
                      v-on:click="number2 = n"
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
      <v-item-group>
        <v-container>
          <v-row justify="center">
            <v-col md="4" cols="12" class="d-flex white--text text-center align-center justify-center">
              <v-card>
                <v-img
                 :src="require(`../assets/campera${number2}.png`)"
                  class="shrink mr-2 d-flex align-center"
                  contain
                  height="200px"
                >
                <div class="display-3 flex-grow-1 text-center" v-if="number == 8 || number == 13">
                  <img height="50px" :src="require(`../assets/modelo${number}.png`)" />
                </div>
                <div class="display-3 flex-grow-1 text-center" v-if="number != 8 && number != 13">
                  <img height="80px" :src="require(`../assets/modelo${number}.png`)" />
                </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
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
                  v-on:click="number = n"
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
      <v-btn text @click="e13 = 1">Volver</v-btn>
    </v-stepper-content>

    <v-stepper-step step="3" complete>
      Termina tu campera!
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-item-group>
        <v-container>
          <v-row justify="center">
            <v-col md="4" cols="12" class="d-flex white--text text-center align-center justify-center">
              <v-card>
                <v-img
                 :src="require(`../assets/campera${number2}.png`)"
                  class="shrink mr-2 d-flex align-center"
                  contain
                  height="200px"
                >
                <div class="display-3 flex-grow-1 text-center" v-if="number == 8 || number == 13">
                  <img height="50px" :src="require(`../assets/modelo${number}.png`)" />
                </div>
                <div class="display-3 flex-grow-1 text-center" v-if="number != 8 && number != 13">
                  <img height="80px" :src="require(`../assets/modelo${number}.png`)" />
                </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col md="4" xs="2" cols="12" class="d-flex white--text text-center align-center justify-center">
              <v-dialog v-model="dialog" max-width="300px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn rounded v-bind="attrs" v-on="on" color="primary" dark>Hace tu pedido</v-btn>
                </template>
                <v-card>
                  <v-container >
                    <v-row justify="center">
                      <v-col class="d-flex align-center justify-center" md="4" xs="1">
                          <v-img
                          id="img_rounded"
                          contain
                          src="../assets/Logo.jpg"
                          width="20%"
                          />
                      </v-col>
                    </v-row>
                  </v-container>
                
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <div v-if="number2 == 0">
                      <v-btn color="blue darken-1" text
                      v-bind:href="'https://api.whatsapp.com/send?phone=543518 03-3796&text=Hola%20buenas%20tardes,%20me%20gustaria%20comprar%20la%20campera%20negra%20con%20el%20modelo%20'+number"
                      target="_blank"
                      @click="dialog = false">Save</v-btn>
                    </div>
                    <div v-if="number2 == 1">
                      <v-btn color="blue darken-1" text
                      v-bind:href="'https://api.whatsapp.com/send?phone=543516181989&text=Hola%20buenas%20tardes,%20me%20gustaria%20comprar%20la%20campera%20color%20jean%20con%20el%20modelo%20'+number"
                      target="_blank"
                      @click="dialog = false">Save</v-btn>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>

    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px">
      </v-card>
      <v-btn color="primary" >Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>


<script>

  export default {
    data () {
      return {
        dialog: false,
        number: 1,
        number2: 1,
        srcss:[
          require('../assets/campera0.png'),
          require('../assets/campera1.png'),
        ],
        msrcs:[
          require('../assets/modelo1.png'),
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
        e13: 3,
        //Form
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
      }
    },
    methods: {
      probar(n){
        console.log(n);
      },
      submit () {
        if (this.$refs.form.validate() == true){
          console.log('guardado');
        }
      },
    }
  }
</script>