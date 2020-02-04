<script>
    import { onMount } from 'svelte';
    import { listen, addListener as addAudioListener } from "./audio/processor";
    import GameEngine from "./game/gameEngine";
    import Player, { PLAYER_W } from "./GameObjects/Player";

    const gameEngine = new GameEngine();
    const playerOne = new Player({ name: "one", x: 5 });
    const playerTwo = new Player({ name: "two", x: 395 - PLAYER_W });

	addAudioListener(value => {
        playerOne.setY(value);
        playerTwo.setY(15);
    });
    
    onMount(() => {
        const canvas = document.getElementById("gameCanvas");

        gameEngine.setCanvas(canvas);
        gameEngine.addUpdatable(playerOne);
        gameEngine.addUpdatable(playerTwo);
        gameEngine.start();
    });
</script>

<div id="canvas">
    <canvas id="gameCanvas" width="400px" height="200px" style="border: 1px solid black"></canvas>
</div>