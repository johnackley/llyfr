<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Llyfr Bookshelf Assistant
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Bookshelves
        </q-item-label>
        <Bookshelf
          v-for="bookshelf in bookshelves"
          :key="bookshelf.title"
          v-bind="bookshelf"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { goodreads } from '../api/goodreads'
import Bookshelf from 'components/Bookshelf.vue'

export default {
  name: 'MainLayout',

  components: {
    Bookshelf
  },

  data () {
    return {
      leftDrawerOpen: false,
      bookshelves: []
    }
  },

  mounted () {
    goodreads.getUsersShelves(93029742).then(console.log)
    // .then(results => {
    //   console.log('shelves from GR:', results)
    // })
  }
}
</script>
