import { API_URL } from "@/config/config";

export async function getSiteData() {

    const res = await fetch(`${API_URL}/site-data`, {
        cache: 'force-cache',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data = await res.json();

    return data.data;
}