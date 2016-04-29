import dotenv from "dotenv";

dotenv.load();

export const YOUR_ENV_VARIABLE = process.env.YOUR_ENV_VARIABLE || "default-value";