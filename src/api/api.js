export const fetchData = async (country) => {
    const url=String(import.meta.env.VITE_BACKEND_URL)
    try {
        const response = await fetch(`${url}/universities?country=${country}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return {data: result, error:null};
    } catch (error) {
        console.error('Error fetching data:', error);
        return {data: null, error: error.message};
    }
};