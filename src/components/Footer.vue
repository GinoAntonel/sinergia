<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-container >
          <v-row justify="center">
            <v-col class="d-flex align-center justify-center" lg="1" xs="4">
              <v-img
              id="img_rounded"
              alt="Sinergia Logo"
              class="shrink mr-2"
              contain
              src="../assets/Logo.jpg"
              transition="scale-transition"
              width="80"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col lg="2" xs="1">ACERCA DE SINERGIA</v-col>
          </v-row>

          <v-row justify="center">
            <v-col class="d-flex align-center justify-center" lg="8" xs="6">
              <v-card
                  
                  width="600"
                  tile
                >
                  <v-list disabled>
                    <v-subheader>Contactos:</v-subheader>
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                      >
                        <v-list-item-icon>
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Sinergia</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>
#img_rounded {
  border-radius: 50%;
}
#row_center{
  align-items: center;
}
</style>

<script>


  export default {

    data: () => ({
      item: 1,
      items: [
        { text: 'sinergiaargentina_', icon: 'mdi-instagram' },
        { text: '3516181989', icon: 'mdi-phone' },
        { text: '3516181989', icon: 'mdi-phone' },
        { text: 'tinchin@gmail.com', icon: 'mdi-email' },
      ],
    }),
  }
</script>
