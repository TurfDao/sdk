import { initTurf } from "./config";
import { startRewards } from "./rewards";

function boot() {
  initTurf();
  startRewards();
  console.log("🌱 TURF running in background");
}

boot();
