// Load environment variables
import { config } from 'dotenv';

const dotenv = config({
    path: '.env',
    encoding: 'utf8',
    debug: process.env.NODE_ENV === 'development',
})

if (dotenv.error) {
    console.error(dotenv.error)
    process.exit(1)
} else {
    console.log('Loaded environment variables 🌎')
}

interface Env {
    EOS_ENV: string
    QUALIFIER_REPS: number
    EOS_PRIVATE_KEY: string,
    EOS_PUBLIC_KEY: string,
    EFXTASKPROXY_ACCOUNT_NAME: string,
    EFXTASKPROXY_ACCOUNT_PERMISSION: string,
    EFXQUALIFIER_ACCOUNT_NAME: string,
    EFXQUALIFIER_ACCOUNT_PERMISSION: string,
    EFFECT_LIKE_CAMPAIGN_ID: number,
    EFFECT_FOLLOWS_CAMPAIGN_ID: number,
    EFFECT_RETWEETS_CAMPAIGN_ID: number,
    EFFECT_COMMENT_CAMPAIGN_ID: number,
    EFFECT_IMAGE_LABELING_CAMPAIGN_ID: number,
    EFFECT_NFT_CATEGORIZATION_CAMPAIGN_ID: number,
    EFFECT_HUMAN_QUALIFIER: number,
    EFFECT_TWITTER_QUALIFIER: number,
    EFFECT_INSTAGRAM_QUALIFIER: number,
    EFFECT_YOUTUBE_QUALIFIER: number,
    EFFECT_NFT_RESEARCH_QUALIFIER: number,
    EFFECT_IMAGE_CLASSIFICATION_QUALIFIER: number,
    RETWEET_INSTRUCTION: string,
    TWITTER_BEARER_TOKEN: string,
    TWITTER_MAX_RESULTS: string,
    UNSPLASH_ACCESS_KEY: string,
    UNSPLASH_SECRET_KEY: string,
}

const loadEnv = (): Env => {
    return {
        EOS_ENV: process.env.EOS_ENV!,
        QUALIFIER_REPS: Number(process.env.QUALIFIER_REPS!),
        EOS_PRIVATE_KEY: process.env.EOS_PRIVATE_KEY!,
        EOS_PUBLIC_KEY: process.env.EOS_PUBLIC_KEY!,
        EFXTASKPROXY_ACCOUNT_NAME: process.env.EFXTASKPROXY_ACCOUNT_NAME!,
        EFXTASKPROXY_ACCOUNT_PERMISSION: process.env.EFXTASKPROXY_ACCOUNT_PERMISSION!,
        EFXQUALIFIER_ACCOUNT_NAME: process.env.EFXQUALIFIER_ACCOUNT_NAME!,
        EFXQUALIFIER_ACCOUNT_PERMISSION: process.env.EFXQUALIFIER_ACCOUNT_PERMISSION!,
        EFFECT_LIKE_CAMPAIGN_ID: Number(process.env.EFFECT_LIKE_CAMPAIGN_ID!),
        EFFECT_FOLLOWS_CAMPAIGN_ID: Number(process.env.EFFECT_FOLLOWS_CAMPAIGN_ID!),
        EFFECT_RETWEETS_CAMPAIGN_ID: Number(process.env.EFFECT_RETWEETS_CAMPAIGN_ID!),
        EFFECT_COMMENT_CAMPAIGN_ID: Number(process.env.EFFECT_COMMENT_CAMPAIGN_ID!),
        EFFECT_IMAGE_LABELING_CAMPAIGN_ID: Number(process.env.EFFECT_IMAGE_LABELING_CAMPAIGN_ID!),
        EFFECT_NFT_CATEGORIZATION_CAMPAIGN_ID: Number(process.env.EFFECT_NFT_CATEGORIZATION_CAMPAIGN_ID!),
        EFFECT_HUMAN_QUALIFIER: Number(process.env.EFFECT_HUMAN_QUALIFIER!),
        EFFECT_TWITTER_QUALIFIER: Number(process.env.EFFECT_TWITTER_QUALIFIER!),
        EFFECT_INSTAGRAM_QUALIFIER: Number(process.env.EFFECT_INSTAGRAM_QUALIFIER!),
        EFFECT_YOUTUBE_QUALIFIER: Number(process.env.EFFECT_YOUTUBE_QUALIFIER!),
        EFFECT_NFT_RESEARCH_QUALIFIER: Number(process.env.EFFECT_NFT_RESEARCH_QUALIFIER!),
        EFFECT_IMAGE_CLASSIFICATION_QUALIFIER: Number(process.env.EFFECT_IMAGE_CLASSIFICATION_QUALIFIER!),
        RETWEET_INSTRUCTION: process.env.RETWEET_INSTRUCTION!,
        TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN!,
        TWITTER_MAX_RESULTS: process.env.TWITTER_MAX_RESULTS!,
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY!,
        UNSPLASH_SECRET_KEY: process.env.UNSPLASH_SECRET_KEY!,
    }
}

export const {
    EOS_ENV,
    QUALIFIER_REPS,
    EOS_PRIVATE_KEY,
    EOS_PUBLIC_KEY,
    EFXTASKPROXY_ACCOUNT_NAME,
    EFXTASKPROXY_ACCOUNT_PERMISSION,
    EFXQUALIFIER_ACCOUNT_NAME,
    EFXQUALIFIER_ACCOUNT_PERMISSION,
    EFFECT_LIKE_CAMPAIGN_ID,
    EFFECT_FOLLOWS_CAMPAIGN_ID,
    EFFECT_RETWEETS_CAMPAIGN_ID,
    EFFECT_COMMENT_CAMPAIGN_ID,
    EFFECT_IMAGE_LABELING_CAMPAIGN_ID,
    EFFECT_NFT_CATEGORIZATION_CAMPAIGN_ID,
    EFFECT_HUMAN_QUALIFIER,
    EFFECT_TWITTER_QUALIFIER,
    EFFECT_INSTAGRAM_QUALIFIER,
    EFFECT_YOUTUBE_QUALIFIER,
    EFFECT_NFT_RESEARCH_QUALIFIER,
    EFFECT_IMAGE_CLASSIFICATION_QUALIFIER,
    RETWEET_INSTRUCTION,
    TWITTER_BEARER_TOKEN,
    TWITTER_MAX_RESULTS,
    UNSPLASH_ACCESS_KEY,
    UNSPLASH_SECRET_KEY,
}: Env = loadEnv()
