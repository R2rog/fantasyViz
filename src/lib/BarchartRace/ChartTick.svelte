<script>
    import { fade } from "svelte/transition";
  
    export let value;
    export let x;
  
    const duration = 250;
  </script>
  
  <div
    transition:fade="{{ duration }}"
    class="tick"
    style="transform: translate({x}px, 0);"
  >
    <div class="line"></div>
    <p class="value">{value}</p>
  </div>
  
  <style>
    .tick {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      color: black;
    }
    .line {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 1.5px;
      background: black;
      opacity: 0.5;
    }
    .value {
      margin: 0;
      transform: translate(-50%, -100%);
      font-size:1em;
      color: black;
      font-weight: bold;
      font-feature-settings: "tnum" 1;
    }
  </style>
  