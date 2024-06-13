export const getColorSelector = (
    displayName: string
): { color1: string; color2: string } => {
    const colorSelector: { [key: string]: { color1: string; color2: string } } =
        {
            Gekko: { color1: '#3A2656', color2: '#3A7233' },
            Fade: { color1: '#18344C', color2: '#387AB2' },
            Breach: { color1: '#B04621', color2: '#44412E' },
            Deadlock: { color1: '#BCC2FF', color2: '#221C3D' },
            Raze: { color1: '#2B474B', color2: '#D64F35' },
            Chamber: { color1: '#163555', color2: '#372D2B' },
            'KAY/O': { color1: '#391A61', color2: '#1A1E4B' },
            Skye: { color1: '#AA8A49', color2: '#314D48' },
            Cypher: { color1: '#2B527C', color2: '#3F3F6C' },
            Sova: { color1: '#082652', color2: '#392931' },
            Killjoy: { color1: '#B87B00', color2: '#413950' },
            Harbor: { color1: '#136C6B', color2: '#0C262C' },
            Viper: { color1: '#2C4F5E', color2: '#347334' },
            Phoenix: { color1: '#EA6D4E', color2: '#363B42' },
            Astra: { color1: '#5210C6', color2: '#A54498' },
            Brimstone: { color1: '#892C1B', color2: '#282B38' },
            Iso: { color1: '#AC52FF', color2: '#20155D' },
            Clove: { color1: '#C347C7', color2: '#062261' },
            Neon: { color1: '#6241CC', color2: '#2C4799' },
            Yoru: { color1: '#3B37A7', color2: '#101042' },
            Sage: { color1: '#41819A', color2: '#226071' },
            Reyna: { color1: '#2F2664', color2: '#2F203F' },
            Omen: { color1: '#344673', color2: '#4F53AF' },
            Jett: { color1: '#557F8C', color2: '#1E3344' },
        }

    return (
        colorSelector[displayName] || { color1: '#000000', color2: '#FFFFFF' }
    )
}
