<template>
  <div>
    <v-app-bar app flat>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="grey">
        <span>Sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-row no-gutters>
        <v-col class="mt-5 text-center">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt />
          </v-avatar>

          <p class="white--text text-subtitle-1 mt-1">The Net Ninja</p>
        </v-col>
      </v-row>

      <v-list nav dense>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        route: "/",
      },
      {
        icon: "mdi-folder",
        text: "My Projects",
        route: "/projects",
      },
      {
        icon: "mdi-account-box",
        text: "Team",
        route: "/team",
      },
    ],
  }),
};
</script>

<style></style>
