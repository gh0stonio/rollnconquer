import type Konva from 'konva';

export interface Tile {
  id: string;
  x: Konva.RegularPolygonConfig['x'];
  y: Konva.RegularPolygonConfig['y'];
  row: number;
  col: number;
}
