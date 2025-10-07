export interface Artwork {
  id: string;
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  room: string;
  wall: string;
}

export interface Hotspot {
  id: string;
  artwork_id: string;
  position: [number, number, number];
  type: string;
}

export interface Waypoint {
  id: string;
  position: [number, number, number];
  room: string;
}

export interface Room {
  name: string;
  position: [number, number, number];
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
}

export interface MuseumMetadata {
  artworks: Artwork[];
  hotspots: Hotspot[];
  waypoints: Waypoint[];
  rooms: Room[];
}
