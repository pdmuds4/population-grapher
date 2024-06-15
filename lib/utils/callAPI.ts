export const callAPI = async <reqT>(endpoint: string, method: string, data?: reqT) => {
    const response = await fetch(endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        try {
            const error = await response.json();
            return {error: error.message, status: response.status};
        } catch {
            return {error: 'Missing Error Analize', status: response.status};
        }
    }

    return await response.json();
}