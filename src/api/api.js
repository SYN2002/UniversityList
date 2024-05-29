export const fetchData = async (country) => {
    try {
        const response = await fetch(`https://backenduniversity.onrender.com/api/universities?country=${country}`);
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