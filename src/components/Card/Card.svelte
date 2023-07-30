<script lang="ts">
  export let title = "";
  export let value: string | number = "";
  export let icon = "";
  export let iconColor = "";
</script>

<ion-card>
  <ion-card-header>
    <ion-card-title>{title}</ion-card-title>
    <ion-card-subtitle>{value}</ion-card-subtitle>
  </ion-card-header>
  <ion-icon name={icon} class="walk-icon"></ion-icon>
</ion-card>

<style lang="scss">
  ion-card{
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ion-icon{
    font-size: 1.5rem;
  }

  ion-card-title{
    font-size: 1.5rem;
  }

  ion-card-subtitle{
    font-size: 1rem;
  }
</style>
