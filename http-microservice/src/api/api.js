import axios from 'axios';

const apiUrl = 'http://localhost:8008';
const timeoutMilliseconds = 500;

async function getNumbers(urls) {
    try {
        const responses = await Promise.all(
            urls.map(async(url) => {
                try {
                    const response = await axios.get(`${apiUrl}/numbers`, {
                        params: { url },
                        timeout: timeoutMilliseconds,
                    });
                    return response.data;
                } catch (error) {

                    return null;
                }
            })
        );


        const validResponses = responses.filter((response) => response !== null);


        const mergedNumbers = validResponses
            .flatMap((response) => response.numbers)
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort((a, b) => a - b);

        return { numbers: mergedNumbers };
    } catch (error) {
        throw error;
    }
}

export { getNumbers };