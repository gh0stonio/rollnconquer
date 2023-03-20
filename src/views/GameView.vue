<script setup lang="ts">
  import { ref } from 'vue';
  import TileShape from '@/components/TileShape.vue';
  import type { Tile } from '@/types';
  import {
    TILE_RADIUS,
    TILE_WIDTH,
    TILE_INITIAL_VERTICAL_OFFSET,
    TILE_STROKE_WIDTH,
    COLS,
    ROWS
  } from '@/constants';

  function generateTilesGrid() {
    const tiles: Tile[] = [];

    for (let r = 1; r <= ROWS; r++) {
      for (let c = 1; c <= COLS; c++) {
        const isOddRow = r % 2 !== 0;

        if (!isOddRow && c === COLS) continue;

        tiles.push({
          x: (isOddRow ? TILE_WIDTH * (c - 1 / 2) : TILE_WIDTH * c) + TILE_STROKE_WIDTH,
          y: TILE_RADIUS * r + (TILE_RADIUS / 2) * (r - 1) + TILE_INITIAL_VERTICAL_OFFSET,
          row: r,
          col: c
        });
      }
    }

    return tiles;
  }

  const configKonva = {
    width: COLS * TILE_WIDTH + TILE_STROKE_WIDTH * 2,
    height: ROWS * TILE_WIDTH + TILE_INITIAL_VERTICAL_OFFSET
  };

  let tiles = generateTilesGrid();

  const selectedTile = ref<Tile>();
  const hoveredTile = ref<Tile>();
  const onTileClick = (tile: Tile) => (selectedTile.value = tile);
  const onMouseHover = (tile?: Tile) => (hoveredTile.value = tile);
</script>

<template>
  <main class="h-full">
    Grid {{ selectedTile }}
    <div class="flex justify-center items-center h-full">
      <konva-stage :config="configKonva">
        <konva-layer>
          <TileShape
            v-for="(tile, key) in tiles"
            :key="key"
            :tile="tile"
            :on-click="onTileClick"
            :on-mouse-hover="onMouseHover"
            :is-targetable="false"
            :is-selected="tile.col === selectedTile?.col && tile.row === selectedTile?.row"
            :is-hovered="tile.col === hoveredTile?.col && tile.row === hoveredTile?.row"
          />
        </konva-layer>
      </konva-stage>
    </div>
  </main>
</template>
