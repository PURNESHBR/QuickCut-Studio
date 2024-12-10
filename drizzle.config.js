/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-short-video-generator_owner:4xmbTDV6ugQF@ep-billowing-mouse-a5a5iu3k.us-east-2.aws.neon.tech/ai-short-video-generator-1?sslmode=require'
    }
  };