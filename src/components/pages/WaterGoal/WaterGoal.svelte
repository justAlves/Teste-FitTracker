<script lang="ts">
  import WaterHeader from "../../WaterHeader/WaterHeader.svelte";
  import Card from "../../Card/Card.svelte";

  console.log(WaterHeader);

  const type = "water";
</script>


  <WaterHeader value={300} />

  <ion-content>
    <Card icon="water" title="Consumido" value="300ml" iconColor={type === "water" ? "333fe9" : ""}/>
  </ion-content>

<style lang="scss">

  ion-content{
    display: flex;
    flex: 1;
    --padding-start: 1rem;
    --padding-end: 1rem;
  }



</style>

