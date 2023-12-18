import { StaticImageData } from "next/image";
import React from "react";



export interface preloaderProps {
  onComplete1: boolean,
  onComplete2: boolean,
  isInitial: boolean,
  setOnComplete: React.SetStateAction<
}

export interface sideBarProps {
  activeSide: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>
}

export interface numbersProps {
  id: number,
  name: string,
  number: string,
  text: string
}

export interface pathRightProps {
  id: number,
  name: string,
  image: StaticImageData,
  text: string,
  delay: string
}

export interface serviceCardProps {
  id: number,
  subtitle: string,
  title: string,
  image: StaticImageData
}

export interface awardsProps {
  id: number,
  award: string,
  giver: string,
  year: number,
  image: StaticImageData,
}

export interface portfolioGalleryProps {
    id: number,
    name: string,
    image: StaticImageData,
    width: number,
    height: number,
    year: number
}