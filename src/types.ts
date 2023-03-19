import type Konva from 'konva';

export interface Tile {
  x: Konva.RegularPolygonConfig['x'];
  y: Konva.RegularPolygonConfig['y'];
  row: number;
  col: number;
}
