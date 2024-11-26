const evaluate = (board: number[][]): number => {
    for (let i = 0; i < 3; i++) {
      if (Math.abs(board[i][0] + board[i][1] + board[i][2]) === 3) {
        return board[i][0] === -1 ? 10 : -10;
      }
      if (Math.abs(board[0][i] + board[1][i] + board[2][i]) === 3) {
        return board[0][i] === -1 ? 10 : -10;
      }
    }
  
    if (Math.abs(board[0][0] + board[1][1] + board[2][2]) === 3) {
      return board[0][0] === -1 ? 10 : -10;
    }
    if (Math.abs(board[0][2] + board[1][1] + board[2][0]) === 3) {
      return board[0][2] === -1 ? 10 : -10;
    }
  
    return 0;
  };
  
  const minimax = (board: number[][], depth: number, isMaximizingPlayer: boolean): number => {
    const score = evaluate(board);
  
    if (score === 10 || score === -10) return score;
    if (isBoardFull(board)) return 0;
  
    if (isMaximizingPlayer) {
      let best = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === 0) {
            board[i][j] = -1; 
            best = Math.max(best, minimax(board, depth + 1, false));
            board[i][j] = 0; 
          }
        }
      }
      return best;
    }

    else {
      let best = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === 0) {
            board[i][j] = 1; 
            best = Math.min(best, minimax(board, depth + 1, true));
            board[i][j] = 0; 
          }
        }
      }
      return best;
    }
  };
  
export  const isBoardFull = (board: number[][]): boolean => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) return false;
      }
    }
    return true;
  };
  
export  const findBestMove = (board: number[][]): { i: number, j: number } => {
    try {
      let bestVal = -Infinity;
      const move = { i: -1, j: -1 };
  
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === 0) {
            board[i][j] = -1;
            const moveVal = minimax(board, 0, false);
            board[i][j] = 0; 
  
            if (moveVal > bestVal) {
              move.i = i;
              move.j = j;
              bestVal = moveVal;
            }
          }
        }
      }
  
      return move;
    } catch (error) {
      console.error("Erreur lors du calcul du meilleur coup pour la machine : ", error);
      return { i: -1, j: -1 }; 
    }
  };
  

  const generateSVG = (matrice: number[][]): string => {
    let svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <rect width="100%" height="100%" fill="#ffffff" />
        <g stroke="#000000" stroke-width="2">
          <line x1="100" y1="0" x2="100" y2="300" />
          <line x1="200" y1="0" x2="200" y2="300" />
          <line x1="0" y1="100" x2="300" y2="100" />
          <line x1="0" y1="200" x2="300" y2="200" />
        </g>
    `;
  
    matrice.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === 1) {
          svgContent += `
            <line x1="${j * 100 + 10}" y1="${i * 100 + 10}" x2="${j * 100 + 90}" y2="${i * 100 + 90}" stroke="#0000FF" stroke-width="3" />
            <line x1="${j * 100 + 90}" y1="${i * 100 + 10}" x2="${j * 100 + 10}" y2="${i * 100 + 90}" stroke="#0000FF" stroke-width="3" />
          `;
        } else if (cell === -1) {
          svgContent += `
            <circle cx="${j * 100 + 50}" cy="${i * 100 + 50}" r="40" stroke="#00FF00" stroke-width="3" fill="none" />
          `;
        }
      });
    });
  
    svgContent += `</svg>`;
    return svgContent;
  };

  export const downloadSVG = (matrice: number[][]) => {
    const svgContent = generateSVG(matrice);
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = "tictactoe-board.svg";
    link.click();
  
    URL.revokeObjectURL(url);
  };
  
  