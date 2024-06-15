export const callAPI = async <reqT, resT>(endpoint: string, method: string, data?: reqT) => {
    const response = await fetch(endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({api_key: process.env.SEC_KEY, ...data}),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch');
    }

    return await response.json() as resT;
}