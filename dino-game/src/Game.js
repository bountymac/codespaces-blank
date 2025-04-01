import React, { useState, useEffect, useRef } from 'react';
import './Game.css';

const Game = () => {
  const [dinoBottom, setDinoBottom] = useState(0);
  const [obstacleLeft, setObstacleLeft] = useState(800);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const initialObstacleLeft = 800;

  const dinoHeight = 50;
  const dinoWidth = 50;
  const obstacleWidth = 20;
  const obstacleHeight = 50;
  const gameSpeed = 5;

  const gameContainer = useRef(null);

  const dinoStyle = {
    bottom: dinoBottom,
  };

    const obstacleStyle = {
      right: obstacleLeft,
    };

  useEffect(() => {
    let dinoInterval;
    let obstacleInterval;
    let scoreInterval;

    const jump = () => {
      if (dinoBottom < 100) {
        setDinoBottom(dinoBottom => dinoBottom + 50);
      }
    };

    const startGame = () => {
      dinoInterval = setInterval(() => {
        setDinoBottom(dinoBottom => dinoBottom - 5);
      }, 20);

      obstacleInterval = setInterval(() => {
        setObstacleLeft(obstacleLeft => {
          if (obstacleLeft < 0) {
            setScore(prevScore => prevScore + 1);
            return initialObstacleLeft;
          }
          return obstacleLeft - gameSpeed;
        });
      }, 20);

      scoreInterval = setInterval(() => {
        setScore(prevScore => prevScore + 1);
      }, 100);
    };

    const handleKeyDown = (event) => {
      if (event.code === 'Space' || event.code === 'ArrowUp') {
        jump();
      }
    };

    const checkCollision = () => {
      if (
        obstacleLeft < 100 &&
        obstacleLeft > 0 &&
        dinoBottom < obstacleHeight
      ) {
        clearInterval(dinoInterval);
        clearInterval(obstacleInterval);
        clearInterval(scoreInterval);
        setGameOver(true);
      }
    };

    if (!gameOver) {
      startGame();
      document.addEventListener('keydown', handleKeyDown);
    } else {
      setDinoBottom(0);
      setObstacleLeft(initialObstacleLeft);
      setScore(0);
      setGameOver(false);
    }

    const collisionInterval = setInterval(checkCollision, 10);

    if (dinoBottom <= 0) {
      setDinoBottom(0);
    }

    return () => {
      clearInterval(dinoInterval);
      clearInterval(obstacleInterval);
      clearInterval(scoreInterval);
      clearInterval(collisionInterval);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameOver, dinoBottom, obstacleLeft]);

  return (
    <div className="game-container" ref={gameContainer}>
      <div className="sky"></div>
      <div className="ground"></div>
      <div className="dino" style={dinoStyle}>
        🦖
      </div>
      <div className="obstacle" style={obstacleStyle}>
        🌵
      </div>
      <div className="score">Score: {score}</div>
      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
