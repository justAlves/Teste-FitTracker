<script lang="ts">
  import { store } from "context/store";
  import WaterHeader from "../../WaterHeader/WaterHeader.svelte";
</script>

<WaterHeader max={$store.waterGoal} />

<ion-content>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button color="dark">
      <ion-icon name="add" />
    </ion-fab-button>
  </ion-fab>
</ion-content>

<style lang="scss">
  ion-content {
    display: flex;
    flex: 1;
    --padding-start: 1rem;
    --padding-end: 1rem;
  }
</style>
