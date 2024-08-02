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
    dimension: string
    residents: string[]
}