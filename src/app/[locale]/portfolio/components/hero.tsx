'use client';

import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Boxes } from "../../components/ui/background-boxes";
import { ArrowRight, Github, Linkedin, Twitter, Download, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { resume } from "../../data";
import Link from "next/link";
import { DownloadCV } from "./download-cv-buttons";

export function HomeHero() {




  return (
    <div className="relative min-h-screen w-full -mt-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Boxes />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>


      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
      />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20">
        <div className={`text-center space-y-8 transition-all duration-1000`}>
          
          {/* Avatar with glow effect */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <Avatar className="relative h-32 w-32 border-4 border-slate-900">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold">
                  ML
                </AvatarFallback>
                <AvatarImage
                  src={resume.avatarUrl}
                  className="object-cover"
                  alt="Mouhamed Lamotte"
                />
              </Avatar>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Disponible pour de nouveaux projets</span>
          </div>

          {/* Main title with gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {resume.name}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-blue-400">
              {resume.title}
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            {resume.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
            >
              <Link href="/portfolio" className="inline-flex items-center">
              Voir mes projets
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <DownloadCV />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:scale-110"
            >
              <Link href="https://x.com/MouhamedLamotly" target="_blank">
              <Twitter className="h-5 w-5 text-slate-400 hover:text-blue-400" />
              </Link>
            </Button>
            
            <Button 
            asChild
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
            >
              <Link href="https://github.com/mouhamedlamotte" target="_blank">

              <Github className="h-5 w-5 text-slate-400 hover:text-purple-400" />
              </Link>
            </Button>
            
            <Button 
            asChild
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:scale-110"
            >
              <Link href="https://www.linkedin.com/in/mouhamed-baba-lamotte-876291252/" target="_blank">
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-blue-400" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>
  );
}