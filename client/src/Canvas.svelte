<script>
    import { onMount } from 'svelte';
    import { listen, addListener as addAudioListener } from "./audio/processor";
    import GameEngine from "./game/gameEngine";
    import Player, { PLAYER_W, SOUND_OFFSET } from "./GameObjects/Player";

    import Ball from "./GameObjects/Ball";

    const gameEngine = new GameEngine();
    const playerOne = new Player({ name: "one", x: -190 });
    const playerTwo = new Player({ name: "two", x: 190 });
    const ball = new Ball({ name: "Ball", startDirection: 1 });

	addAudioListener(value => {
        playerOne.setY(value);
        playerTwo.setY(SOUND_OFFSET);
    });
    
    onMount(() => {
        const canvas = document.getElementById("gameCanvas");

        gameEngine.setCanvas(canvas);
        gameEngine.addUpdatable(playerOne);
        gameEngine.addUpdatable(playerTwo);
        gameEngine.addUpdatable(ball);
        gameEngine.start();
    });
</script>

<div id="canvas">
    <canvas id="gameCanvas" width="400px" height="200px" style="border: 1px solid black"></canvas>
</div>