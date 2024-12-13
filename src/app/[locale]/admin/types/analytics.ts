export type GamePlay = {
    id: string
    gameName: string
    level: 'EASY' | 'MEDIUM' | 'HARD'
    winner: 'USER' | 'COMPUTER'
    duration: number
    playDate: string
  }
  
  export type DevisRequest = {
    id: string
    name: string
    email: string
    company: string
    phone: string
    projectType: string
    budget: number
    description: string
    createdAt: string
  }
  
  export type Download = {
    id: string
    itemName: string
    visitId: string
    downloadDate: string
  }
  
  export type Visitor = {
    id: string
    ipAddress: string
    country: string
    region: string
    deviceType: string
    browser: string
    os: string
    visitDate: string
    source: string
    isBot: boolean
  }
  
  export type TimeRange = '7d' | '30d' | '90d' | 'all'
  
  