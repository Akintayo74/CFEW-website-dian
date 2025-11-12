import React from 'react';
import useSWR from 'swr';

const API_URL = 'https://centre-for-earth-works-26db89bfe5a5.herokuapp.com/api/v1/'

export async function fetcher(endpoint) {
    const response = await fetch(endpoint);
    const json = await response.json();

    return json;
}