"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"


import { Dispatch, SetStateAction, useEffect,  useState } from "react";
import { useTictactoeLevelStore } from "../stores/tictactoeStore";
import { findBestMove, isBoardFull } from "@/lib/tictactoe";
import { toast } from "@/components/ui/use-toast";


export default function Tictactoe() {

  const level = useTictactoeLevelStore((state)=>state.level);

  const [matrice, setMatrice] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  const [playerOne, setplayerOne] = useState(true); // True for player, false for machine
  const [hasWinner, setHaswinner] = useState(false);

  // Fonction de mise à jour de la matrice de jeu
  const handleUpdateMatrice = (i: number, j: number, value: number) => {
    try {
      // S'assurer que la case est vide avant de la mettre à jour
      const new_matrice = matrice.map(row => [...row]);
      if (new_matrice[i][j] === 0) {
        new_matrice[i][j] = value;
        setMatrice(new_matrice);
  
        if (isWinner(new_matrice)) {
          setHaswinner(true);
          setOpen(true);
        } else {
          setplayerOne(!playerOne);
        }
  
        // Vérifier si la matrice est pleine et qu'il n'y a pas de gagnant
        if (!hasWinner && isBoardFull(new_matrice)) {
          setTimeout(() => {
            toast({
              title: "Match nul !",
              description: "Le jeu est fini sans gagnant.",
              action: (
                <Button
                  variant="destructive"
                  onClick={() => {
                    resetGame();
                    setOpen(false);
                  }}
                >
                  Recommencer
                </Button>
              )
            })
          }, 1000);
        }
      } else {
        // Si la case est déjà occupée, on peut afficher un message ou un avertissement
        console.warn("Case déjà occupée !");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la matrice : ", error);
    }
  };
  
  

  // Réinitialisation du jeu
  const resetGame = () => {
    try {
      setMatrice([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]);
      setplayerOne(true);
      setHaswinner(false);
    } catch (error) {
      console.error("Erreur lors de la réinitialisation du jeu : ", error);
    }
  };
  

  // Vérification de la condition de victoire
  const isWinner = (matrice: number[][]) => {
    try {
      for (let i = 0; i < matrice.length; i++) {
        const row = matrice[i];
        let sum = 0;
        row.map(e => sum += e);
        if (sum === 3 || sum === -3) {
          return true;
        }
      }
      const sum_matrice_diagonal = matrice[0][0] + matrice[1][1] + matrice[2][2];
      const sum_matrice_diagonal_secondaire = matrice[0][2] + matrice[1][1] + matrice[2][0];
      if (sum_matrice_diagonal === 3 || sum_matrice_diagonal === -3 || sum_matrice_diagonal_secondaire === 3 || sum_matrice_diagonal_secondaire === -3) {
        return true;
      }
      const matrice_vertical_1 = matrice[0][0] + matrice[1][0] + matrice[2][0];
      const matrice_vertical_2 = matrice[0][1] + matrice[1][1] + matrice[2][1];
      const matrice_vertical_3 = matrice[0][2] + matrice[1][2] + matrice[2][2];
      if (matrice_vertical_1 === 3 || matrice_vertical_2 === 3 || matrice_vertical_3 === 3 || matrice_vertical_1 === -3 || matrice_vertical_2 === -3 || matrice_vertical_3 === -3) {
        return true;
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de la victoire : ", error);
      return false;  // Retourne false en cas d'erreur pour éviter un crash
    }
  
    return false; // Retourne false si aucune victoire n'est trouvée
  };
  

  // Fonction pour que la machine joue
  const machinePlay = () => {
    try {
      if (hasWinner || playerOne) return;
  
      const bestMove = findBestMove(matrice);
      if (bestMove.i !== -1 && bestMove.j !== -1) {
        handleUpdateMatrice(bestMove.i, bestMove.j, -1); // La machine joue "0"
      } else {
        console.error("Aucun coup valide trouvé pour la machine !");
      }
    } catch (error) {
      console.error("Erreur lors de la sélection du coup de la machine : ", error);
    }
  };

  const EasymachinePlay = () => {
    if (hasWinner || playerOne) return;
  
    const emptyCells: { i: number; j: number }[] = [];
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrice[i][j] === 0) {
          emptyCells.push({ i, j });
        }
      }
    }
  
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const { i, j } = emptyCells[randomIndex];
      handleUpdateMatrice(i, j, -1);  
    }
  };
  
  
  

  useEffect(() => {
    console.log(level);
    
    if (!playerOne && !hasWinner) {
      if (level === 1) {
        EasymachinePlay();
      }else {
        machinePlay();
      }
    }
  }, [playerOne, matrice, hasWinner]);

  useEffect(() => {
      resetGame();
  }, [level]);
  

  const [open, setOpen] = useState(false);



  return (
    <div className="">
      <div className="flex justify-center" >
        <div className="grid grid-cols-3 border-slate-600 rounded">
          {
            matrice.map((cell, i) => {
              return (
                <div key={`cell-${i}`}>
                  {
                    cell.map((col, j) => {
                      return (
                        <button
                          disabled={hasWinner}
                          key={`col-${j}`}
                          className="h-[80px] w-[80px] border flex justify-center items-center hover:bg-muted [&_p]:hover:flex"
                          title="cell"
                          onClick={() => handleUpdateMatrice(i, j, playerOne ? 1 : -1)}
                        >
                          {col === 0 && (
                            <p className="text-muted-foreground opacity-30 hidden hover:flex text-2xl font-bold">
                              {playerOne ? 'X' : '0'}
                            </p>
                          )}
                          <p className="text-2xl font-bold">
                            {col === 0 ? "" : col === 1 ? <span className="text-xl text-blue-400">X</span> : <span className="text-xl text-green-400">0</span>}
                          </p>
                        </button>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
      {
        hasWinner || isBoardFull(matrice) ? <Button onClick={resetGame}>Rejouer</Button> :
          <div className="">
            {
              playerOne ? <span className="text-sm font-bold">C&apos;est a ton tour {" ==>"} <span className="text-xl text-blue-400">X</span></span> :
                <span className="text-sm font-bold">C&apos;est Au tour de la machine{" ==>"} <span className="text-xl text-green-400">0</span></span>
            }
          </div>
      }
      {

      }
      </div>
      <WinnerDialog open={open} setOpen={setOpen} winner={playerOne ? "X" : "0"} />
    </div>
  );
}

// Dialogue de victoire
const WinnerDialog = ({ open, setOpen, winner }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, winner: string }) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{
            winner === "X" ? "Félicitations !" : "Oups 🥱😅🚶🏾‍♂️ !"
            }</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          {
            winner === "X" ? <DialogDescription>Vous avez gagné !</DialogDescription> :
              <DialogDescription>La machine a gagné ! prends ta revanche !</DialogDescription>
          }
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button">
              Ok
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
