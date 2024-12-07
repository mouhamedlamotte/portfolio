"use client"

import React, { useRef } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/[locale]/components/ui/select";
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/app/[locale]/components/ui/card";
import { useTictactoeLevelStore } from '../stores/tictactoeStore';
import { ArrowRight, Camera, Share } from 'lucide-react';
import { Button } from '@/app/[locale]/components/ui/button';
import { downloadAsImage } from '@/lib/save-images';
import Tictactoe from './tictactoe';






export const TictactoePlate = () => {

  const setLevel = useTictactoeLevelStore((state) => state.setLevel);
  const cardRef = useRef<HTMLDivElement>(null);


  return (
    <Card className="relative overflow-hidden h-fit" ref={cardRef}>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>TicTacToe</CardTitle>
        <Select defaultValue="1" onValueChange={(value) => setLevel(value as unknown as number)}>
          <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Niveau" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1" >Facile 😌</SelectItem>
            <SelectItem value="2" >Impossible 🥵</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="s">
        <Tictactoe cardRef={cardRef} />
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-xs">Tu as gagné(e) contre le niveau Impossible ? 🥵 montre moi </p>
        <ArrowRight className="h-4 w-4 ms-3 text-muted-foreground" />
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" className="text-muted-foreground" size="icon" onClick={() => downloadAsImage("png", cardRef, "tictactoe")}>
            <Camera />
          </Button>
          <Button variant="ghost" className="text-muted-foreground" size="icon" disabled>
            <Share />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
