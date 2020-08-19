<template>
  <v-card
    class="mx-auto"
    max-width="300"
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
</template>


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