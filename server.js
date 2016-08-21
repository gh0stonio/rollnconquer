import express from 'express';
import socketio from 'socket.io';
import mapGenerator from 'map-gen';

let games = [];
const playerColors = {
  1: 'red',
  2: 'green',
  3: 'orange',
  4: 'blue'
};

// Express
const app = express();
const server = app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Server started: http://localhost:3000');
});

// Socket.io
const io = socketio(server);
io.on('connection', (socket) => {
  let player = {};

  socket.on('create_game', (config) => {
    const mapConfig = {
      width: 10,
      height: 10,
      hexagonSize: 15,
      useDistortion: false,
      useCompactShapes: false
    };
    const game = {
      name: config.name,
      totalPlayers: 1,
      maxPlayers: 5
    };

    const generateRegionColor = () => {
      function getRandomIntInclusive (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      return playerColors[getRandomIntInclusive(1, 4)];
    };

    game.map = mapGenerator.generateMap(mapConfig);
    game.map.regions = game.map.regions.map((region) => {
      region.color = generateRegionColor();
      return region;
    });

    games.push(game);
    player.currentGame = game;
    socket.broadcast.emit('games_list', games);
  });

  socket.on('join_game', (gameName) => {
    let game = games.find((game) => {
      return game.name === gameName;
    });

    game.totalPlayers++;
    player.currentGame = game;
    socket.broadcast.emit('games_list', games);
  });

  socket.on('get_current_game', () => {
    socket.emit('current_game', player.currentGame);
  });

  socket.on('get_games_list', () => {
    socket.emit('games_list', games);
  });
});
