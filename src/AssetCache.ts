const encoder = new TextEncoder();

const getDurationMs = (duration = '0s') => {
    const unit = duration[duration.length - 1];

    let multiplier;

    switch (unit) {
        case 'm':
            multiplier = 60;
            break;
        case 'h':
            multiplier = 60 * 60;
            break;
        case 'd':
            multiplier = 60 * 60 * 24;
            break;
        case 'w':
            multiplier = 60 * 60 * 24 * 7;
            break;
        case 'y':
            multiplier = 60 * 60 * 24 * 365;
            break;
        default:
            multiplier = 1;
            break;
    }

    const durationValue = parseInt(duration.slice(0, -1), 10);

    return durationValue * multiplier * 1000;
}

const createCacheName = (hash:string) => `lume-fetch-${hash}`;

const getHash = async (url:string, hashLength = 30) => {
    const buffer = encoder.encode(url);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);

    
}
/**
 * AssetCache outline
 * 
 * #hash use createHash sha256 with the url as the "seed"
 * 
 * #source the 
 */


class AssetCache {
    #source:string;
    #hash:string
    constructor() {
        
    }

    setHash() {

    }
}