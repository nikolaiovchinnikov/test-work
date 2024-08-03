export interface IData {
    count: number
    next: string
    page: number
    prev: string
}

interface IGeneral {
    id: number
    name: string
    url: string
    created: string
    type: string
}

interface INameUrl {
    name: string
    url: string
}

export interface ICharacter extends IGeneral {
    image: string
    episode: string[]
    gender: string
    location: INameUrl
    origin: INameUrl
    species: string
    status: string
}

export interface IEpisode extends IGeneral {
    episode: string
    characters: string[]
    air_date: string
}

export interface Ilocation extends IGeneral {
    dimension: string 
    residents: string[]
}

export interface IResultsCharacter {
    info: IData
    results: ICharacter[]
}
export interface IResultslocation  {
    info: IData
    results: Ilocation[]
}
export interface IResultsEpisode  {
    info: IData
    results: IEpisode[]
}