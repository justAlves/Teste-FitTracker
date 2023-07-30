<script lang="ts">
  import WaterHeader from "../../WaterHeader/WaterHeader.svelte";
  import Card from "../../Card/Card.svelte";

  console.log(WaterHeader);

  const type = "water";
</script>


  <WaterHeader value={300} />

  <ion-content>

    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button color="dark" on:click={() => push("/walk-goal")}>
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>

  </ion-content>

<style lang="scss">

  ion-content{
    display: flex;
    flex: 1;
    --padding-start: 1rem;
    --padding-end: 1rem;
  }



</style>

