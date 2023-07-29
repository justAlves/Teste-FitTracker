<script lang="ts">
  export let min = 0;
  export let max = 2000;
  export let value = 50;
</script>

<ion-content >
  <div class="container">
    <div class="header">
      <ion-icon name="water" class="walk-icon"></ion-icon>
      <h1>Consumido: <span>{value}ml</span></h1>
      <h2>Meta</h2>
      <h3>{max}ml</h3>
    </div>
    <div>

    </div>
  </div>
</ion-content>

<style>
  ion-content{
    --background: #eeeeee;
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40%;
    width: 100%;
    background-color: #2934ce;
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

  h2, h3{
    color: #ffffffc7;
    font-size: 1.5rem;
    margin: 1px;
  }

  span{
    color: #fffffcc2;
    font-size: 1.5rem;
  }

</style>


