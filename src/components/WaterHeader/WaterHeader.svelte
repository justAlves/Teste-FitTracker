<script lang="ts">

  import { store } from "../../context/store";



  export let min = 0;
  export let max = $store.waterGoal;
  export let value = 0;
</script>

<ion-header class="header">
    <div class="container">
      <ion-icon name="water" class="walk-icon"></ion-icon>
      <h1>Consumido: <span>{value}ml</span></h1>
      <h2>Meta: <span>{max}ml</span></h2>
    </div>
</ion-header>

<style>
  ion-content{
    --background: #eeeeee;
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 100%;
    background-color: #333fe9;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 10px 23px 4px rgba(0,0,0,0.1);
    padding: 1rem;
  }

  .walk-icon{
    font-size: 2.5rem;
    color: #fff;
  }

  h1{
    color: #fff;
    font-size: 2rem;
    margin: 1.5rem;
    font-weight: bold;
  }

  h2{
    color: #ffffffc7;
    font-size: 1.5rem;
    margin: 1px;
  }

  span{
    color: #fffffcc2;
    font-size: 1.5rem;
  }

</style>


