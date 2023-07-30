
<script lang="ts">
  import { store } from "context/store";

  let editable = false;



  function toggleEditable() {
    editable = !editable;
  }


</script>

<ion-content>
  <ion-list>
    <ion-item>
      <ion-label>Meta de Água em Ml</ion-label>
      <ion-input
        slot="end"
        placeholder="Meta de água em ml"
        value={$store.waterGoal}
        disabled={!editable}
        on:change={(e) => store.setWaterGoal(e.target.value)}
      />
    </ion-item>
    <ion-item>
      <ion-label>Pausas para Exercitar</ion-label>
      <ion-input slot="end" placeholder="Meta de pausas"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Água por aviso</ion-label>
      <ion-input slot="end" placeholder="Água sugerida no aviso"></ion-input>
    </ion-item>
  </ion-list>

  <ion-button
    color="success"
    onClick={toggleEditable}
  >
    <ion-icon name="save-outline"></ion-icon>
    Salvar
  </ion-button>
</ion-content>

<style lang="scss">

</style>
