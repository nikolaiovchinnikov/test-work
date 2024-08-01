interface INameUrl {
    name: string
    url: string
}

export interface ICharacter {
    image: string
    id: number
    created: string
    episode: string[]
    gender: string
    location: INameUrl
    origin: INameUrl
    species: string
    status: string
    type: string
    url: string
}
