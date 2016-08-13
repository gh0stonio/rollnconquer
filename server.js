import express from 'express';
import socketio from 'socket.io';

let games = [];

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
    console.log('create_game', config);
    const game = {
      name: config.name,
      totalPlayers: 1,
      maxPlayers: 5
    };

    games.push(game);
    player.currentGame = game;
    socket.broadcast.emit('games_list', games);
  });

  socket.on('join_game', (gameName) => {
    console.log('join_game', gameName);
    let game = games.find((game) => {
      return game.name === gameName;
    });

    game.totalPlayers++;
    player.currentGame = game;
    socket.broadcast.emit('games_list', games);
  });

  socket.on('get_current_game', () => {
    console.log('get_current_game', player.currentGame);
    socket.emit('current_game', player.currentGame);
  });

  socket.on('get_games_list', () => {
    console.log('get_current_game', games);
    socket.emit('games_list', games);
  });
});
