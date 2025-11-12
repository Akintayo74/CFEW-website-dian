import React from 'react';
import useSWR from 'swr';

export const API_URL = 'https://centre-for-earth-works-26db89bfe5a5.herokuapp.com/api/v1/posts'

// export async function fetcher(endpoint) {
//     const response = await fetch(endpoint);
//     const json = await response.json();

//     if(!json.ok) {
//         throw json;
//     }

//     return json;
// }

export async function fetcher(endpoint) {
    const response = await fetch(endpoint);

    // 1. Check if the HTTP request itself was successful (e.g., 200 OK)
    if (!response.ok) {
        // You can try to parse the JSON for an error message, but fallback to statusText
        let errorInfo = response.statusText;
        try {
            const errorJson = await response.json();
            errorInfo = errorJson.message || response.statusText;
        } catch (e) {
            // Ignore if the error response isn't JSON
        }
        throw new Error(errorInfo);
    }

    // 2. Parse the successful JSON response
    const json = await response.json();

    // 3. Check for the application-level success flag from your API
    if (!json.success) {
        // Use the API's error message if it exists
        throw new Error(json.message || 'API returned success: false');
    }

    // 4. Return the JSON data
    return json;
}