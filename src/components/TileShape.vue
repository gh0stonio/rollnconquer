<script setup lang="ts">
  import type { Tile } from '@/types';
  import { TILE_RADIUS, TILE_STROKE_WIDTH, TILE_WIDTH } from '@/constants';

  defineProps<{
    tile: Tile;
    isSelected: boolean;
    onClick: (tile: Tile) => void;
  }>();
</script>

<template>
  <konva-regular-polygon
    :config="{
      radius: TILE_RADIUS,
      sides: 6,
      fill: isSelected ? 'red' : '#93989D',
      stroke: 'black',
      strokeWidth: TILE_STROKE_WIDTH,
      ...tile
    }"
    @click="onClick(tile)"
  />
  <konva-text
    :config="{
      text: `${tile.row}-${tile.col}`,
      fontSize: 15,
      x: tile.x && tile.x - TILE_WIDTH / 4,
      y: tile.y && tile.y - TILE_RADIUS / 4
    }"
    @click="onClick(tile)"
  />
</template>
