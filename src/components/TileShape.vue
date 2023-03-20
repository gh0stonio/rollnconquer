<script setup lang="ts">
  import { computed } from 'vue';
  import type { Tile } from '@/types';
  import { TILE_RADIUS, TILE_STROKE_WIDTH, TILE_WIDTH } from '@/constants';

  const props = defineProps<{
    tile: Tile;
    isHovered: boolean;
    isSelected: boolean;
    isTargetable: boolean;
    onClick: (tile: Tile) => void;
    onMouseHover: (tile?: Tile) => void;
  }>();

  const color = computed(() => {
    const baseColor = props.isSelected ? '#FF0000' : props.isTargetable ? '#FFFF00' : '#93989D';
    return props.isHovered ? `${baseColor}BB` : baseColor;
  });
</script>

<template>
  <konva-regular-polygon
    :config="{
      radius: TILE_RADIUS,
      sides: 6,
      fill: color,
      stroke: 'black',
      strokeWidth: TILE_STROKE_WIDTH,
      ...tile
    }"
    @click="onClick(tile)"
    @mouseover="onMouseHover(tile)"
  />
  <konva-text
    :config="{
      text: `${tile.row}-${tile.col}`,
      fontSize: 15,
      x: tile.x && tile.x - TILE_WIDTH / 4,
      y: tile.y && tile.y - TILE_RADIUS / 4
    }"
    @click="onClick(tile)"
    @mouseover="onMouseHover(tile)"
  />
</template>
