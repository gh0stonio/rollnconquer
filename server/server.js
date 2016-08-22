import express from 'express';
import socketio from 'socket.io';
import Game from './Game';
import Games from './Games';
import Player from './Player';

let games = new Games();

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
  let player = new Player();

  const onCreateGame = (config) => {
    const game = new Game(config);

    player.joinGame(game);
    games.add(game);
    socket.broadcast.emit('games_list', games.getAll());
  };

  const onJoinGame = (gameName) => {
    let game = games.findByName(gameName);

    game.addNewPlayer();
    player.joinGame(game);
    socket.broadcast.emit('games_list', games.getAll());
  };

  const onGetCurrentGame = () => {
    socket.emit('current_game', player.getCurrentGame());
  };

  const onGetGamesList = () => {
    socket.emit('games_list', games.getAll());
  };

  socket.on('create_game', onCreateGame);
  socket.on('join_game', onJoinGame);
  socket.on('get_current_game', onGetCurrentGame);
  socket.on('get_games_list', onGetGamesList);
});
