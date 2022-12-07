<script>
    export let week;
  </script>
  
  {#if week}
    <div>
      <p>{week}</p>
    </div>
  {/if}
  
  <style>
    p {
      /*position: absolute;*/
      bottom: 0;
      right: 0;
      margin: 1rem;
      font-size: 2rem;
      font-weight: bold;
      font-feature-settings: "tnum" 1;
      color: black;
    }
    div {
      display: flex;
      justify-content: center;
    }
  </style>
  