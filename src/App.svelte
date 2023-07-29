<script lang="ts">
  import Router, { replace, link, push } from "svelte-spa-router";
  import routes, { IRouteLoadingDetail } from "./routes";

  function routeLoading(event: CustomEvent) {
    const detail = event.detail as IRouteLoadingDetail;

    // If not hash based, redirect to hash based path
    if (!window.location.hash.startsWith("#/")) {
      // Save query string
      const { search } = window.location;

      // Remove any paths and querystrings
      window.history.replaceState(null, "", `${window.location.origin}${window.location.pathname}`);

      // Go to location with querystring
      replace(detail.location + search)
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.error(e);
        });
    }
  }

  function navigate(path: string) {
    push(path)
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  }
</script>

<ion-app >
  <Router {routes} on:routeLoading={routeLoading}/>

  <ion-tab-bar slot="bottom">

      <ion-tab-button on:click={() => navigate("/")}>
        <ion-icon name="water" class="walk-icon"></ion-icon>
        <ion-label>Água</ion-label>
      </ion-tab-button>



      <ion-tab-button on:click={() => push("/walk")}>
        <ion-icon name="walk" class="walk-icon"></ion-icon>
        <ion-label>Exercícios</ion-label>
      </ion-tab-button>


    <ion-tab-button on:click={() => push("/settings")}>
      <ion-icon name="settings" class="walk-icon"></ion-icon>
      <ion-label>Configurações</ion-label>
    </ion-tab-button>
  </ion-tab-bar>

</ion-app>

<style lang="scss">
  ion-tab-button{
    --color: #5a5a5a;
    --color-selected: #00aa2a;
    --color-focused: #00aa2a;
  }

</style>

