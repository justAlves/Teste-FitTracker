<script lang="ts">
  import WalkHeader from "../../WalkHeader/WalkHeader.svelte";
  import Card from "../../Card/Card.svelte";

  console.log(WalkHeader);
</script>

<WalkHeader value={1}/>

<ion-content>
  <Card icon="walk" title="Pausas" value="1" iconColor="333fe9"/>

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
