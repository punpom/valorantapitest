interface Ability {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
}

interface Role {
    description: string,
    displayName: string,
    displayIcon: string,
}

export type AgentType = {
    uuid: string,
    abilities: Ability[],
    background: string,
    backgroundGradientColors: string[],
    bustPortrait: string,
    displayIcon: string,
    displayIconSmall: string,
    displayName: string,
    fullPortraitV2: string,
    role: Role
  }