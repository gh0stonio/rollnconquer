<script setup lang="ts">
  import { computed, ref } from 'vue';
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
          id: `${r}-${c}`,
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
  const targetablesTilesIds = computed(() => {
    if (!selectedTile.value) return [];

    const isOddRow = selectedTile.value.row % 2 !== 0;

    const leftTile = `${selectedTile.value.row}-${selectedTile.value.col - 1}`;
    const topLeftTile = isOddRow
      ? `${selectedTile.value.row - 1}-${selectedTile.value.col - 1}`
      : `${selectedTile.value.row - 1}-${selectedTile.value.col}`;
    const topRightTile = isOddRow
      ? `${selectedTile.value.row - 1}-${selectedTile.value.col}`
      : `${selectedTile.value.row - 1}-${selectedTile.value.col + 1}`;
    const rightTile = `${selectedTile.value.row}-${selectedTile.value.col + 1}`;
    const bottomRightTile = isOddRow
      ? `${selectedTile.value.row + 1}-${selectedTile.value.col}`
      : `${selectedTile.value.row + 1}-${selectedTile.value.col + 1}`;
    const bottomLeftTile = isOddRow
      ? `${selectedTile.value.row + 1}-${selectedTile.value.col - 1}`
      : `${selectedTile.value.row + 1}-${selectedTile.value.col}`;

    return [leftTile, topLeftTile, topRightTile, rightTile, bottomRightTile, bottomLeftTile];
  });

  const onTileClick = (tile: Tile) => (selectedTile.value = tile);
  const onMouseHover = (tile?: Tile) => (hoveredTile.value = tile);
</script>

<template>
  <main class="h-full">
    Grid {{ selectedTile }}
    {{ targetablesTilesIds }}
    <div class="flex justify-center items-center h-full">
      <konva-stage :config="configKonva" @mouseout="onMouseHover">
        <konva-layer>
          <TileShape
            v-for="(tile, key) in tiles"
            :key="key"
            :tile="tile"
            :on-click="onTileClick"
            :on-mouse-hover="onMouseHover"
            :is-targetable="targetablesTilesIds.includes(tile.id)"
            :is-selected="tile.id === selectedTile?.id"
            :is-hovered="tile.id === hoveredTile?.id"
          />
        </konva-layer>
      </konva-stage>
    </div>
  </main>
</template>
