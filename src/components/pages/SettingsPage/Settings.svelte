<script lang="ts">
  import { store } from "context/store";

  let editable = false;

  function handleClick() {
    if (editable) {
      editable = true;
    } else {
      // Editar
      editable = false;
    }
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
      <ion-input slot="end" placeholder="Meta de pausas" />
    </ion-item>
    <ion-item>
      <ion-label>Água por aviso</ion-label>
      <ion-input slot="end" placeholder="Água sugerida no aviso" />
    </ion-item>
  </ion-list>

  <ion-button color="success" onClick={handleClick}>
    <ion-icon name="save-outline" />
    {editable ? "Salvar" : "Editar"}
  </ion-button>
</ion-content>

<style lang="scss">
</style>
