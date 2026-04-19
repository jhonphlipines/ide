"use strict";

const NEON_DATA_API_BASE_URL = "https://ep-falling-dawn-ak1ehf4o.apirest.c-3.us-west-2.aws.neon.tech/neondb/rest/v1";

/**
 * Generates a random API key.
 * @returns {string} The generated API key.
 */
function generateKey() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const retVal = new Uint8Array(32);
    window.crypto.getRandomValues(retVal);
    let key = "";
    for (let i = 0; i < retVal.length; i++) {
        key += charset[retVal[i] % charset.length];
    }
    return `j0_${key}`;
}

/**
 * Hashes a string using SHA-256.
 * @param {string} string The string to hash.
 * @returns {Promise<string>} The hex-encoded hash.
 */
async function hashString(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
}

/**
 * Saves a new API key to the Neon database via the Data API.
 * @param {string} name Label for the key.
 * @param {string} email Owner's email.
 * @param {string} key The plain text key (to be hashed before saving).
 * @param {string} authToken The Neon Auth JWT.
 */
async function saveKeyToNeon(name, email, key, authToken) {
    const keyHash = await hashString(key);
    const keyPrefix = key.substring(0, 8);

    const response = await fetch(`${NEON_DATA_API_BASE_URL}/api_keys`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key_hash: keyHash,
            key_prefix: keyPrefix,
            name: name,
            owner_email: email
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to save API key to Neon.");
    }

    return await response.json();
}

/**
 * Fetches API keys for a given owner from Neon.
 * @param {string} email Owner's email.
 * @param {string} authToken The Neon Auth JWT.
 */
async function fetchKeys(email, authToken) {
    const response = await fetch(`${NEON_DATA_API_BASE_URL}/api_keys?owner_email=eq.${encodeURIComponent(email)}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch API keys from Neon.");
    }

    return await response.json();
}

/**
 * Revokes an API key.
 * @param {string} id The UUID of the key.
 * @param {string} authToken The Neon Auth JWT.
 */
async function revokeKey(id, authToken) {
    const response = await fetch(`${NEON_DATA_API_BASE_URL}/api_keys?id=eq.${id}`, {
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: "revoked"
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to revoke API key.");
    }

    return true;
}

export default {
    generateKey,
    hashString,
    saveKeyToNeon,
    fetchKeys,
    revokeKey
};
