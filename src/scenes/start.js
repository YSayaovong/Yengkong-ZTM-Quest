import { initMap } from '../init/map.init';
import { k } from '../kplayCtx';
import { getGameState } from '../utils/gameState';
import { changePlayerSprite } from '../utils/changePlayer';
import gameObjects from '../gameObjects/map_start';
import interactions from '../interactions/map_start';
import sounds from '../sounds/map_start';

export async function start() {
    const objectConfig = {
        static: [
            'map_boundaries',
            'building_boundaries',
            'chairs',
            'enter_new_map_boundaries',
        ],
        spawnpoints: ['spawnpoints'],
        interactionObjects: ['interaction_objects'],
    };

    const [map, spawnpoint] = await initMap(
        objectConfig,
        './exports/maps/map_start.png',
        './maps/map_start.json',
        k.vec2(0, 11),
    );

    // Get selected character BEFORE creating player
    const gs = getGameState();
    const charName = gs.player?.character?.name || 'junior';

    // Create player with temp sprite
    const player = k.add([
        k.sprite('player', { frame: 0 }),
        k.pos(spawnpoint.player),
        k.area(),
    ]);

    // Immediately apply the selected character
    changePlayerSprite(charName, 'idle-down', k, player);

    // ===== Help / Controls overlay =====

    let helpOverlay = null;

    function createHelpOverlay() {
        const overlay = k.add([
            k.rect(k.width() * 0.6, k.height() * 0.6, { radius: 12 }),
            k.pos(k.center()),
            k.anchor('center'),
            k.outline(4),
            k.color(0, 0, 0),
            k.opacity(0.9),
            k.z(999),
            k.fixed(), // stays in place when camera moves
            'help-overlay',
        ]);

        // Title
        overlay.add([
            k.text('Controls & Help', { size: 28 }),
            k.pos(0, -k.height() * 0.25),
            k.anchor('center'),
            k.color(255, 255, 255),
        ]);

        const lines = [
            'Movement: Arrow keys / WASD',
            'Interact: E',
            'Open Map: M',
            'Stats: S',
            'Mute / Unmute: speaker icon (top-right)',
            '',
            'Press H again to close.',
        ];

        lines.forEach((line, i) => {
            overlay.add([
                k.text(line, { size: 20 }),
                k.pos(-k.width() * 0.25 + 40, -k.height() * 0.15 + i * 30),
                k.anchor('left'),
                k.color(255, 255, 255),
            ]);
        });

        return overlay;
    }

    function toggleHelp() {
        if (helpOverlay) {
            helpOverlay.destroy();
            helpOverlay = null;
            return;
        }

        helpOverlay = createHelpOverlay();
    }

    // Keybinds for help
    k.onKeyPress('h', () => {
        toggleHelp();
    });

    k.onKeyPress('escape', () => {
        if (helpOverlay) {
            helpOverlay.destroy();
            helpOverlay = null;
        }
    });

    return [map, spawnpoint, gameObjects, interactions, sounds];
}
