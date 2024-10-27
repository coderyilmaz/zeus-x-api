import axios from "axios";

export class Zeus {
    constructor(apiKey) {
        this.baseUrl = 'https://api.zeus-x.ru/';
        this.apiKey = apiKey;
    }

    async getBalance() {
        return this.Request('balance', 'get', { apikey: this.apiKey });
    }
    async getPurchase(type,count=1) {
        return this.Request('purchase', 'get', { apikey: this.apiKey, accountcode: type, quantity: count });
    }

    async Request(path, method, data = {}) {
        try {
            const response = await axios({
                url: `${this.baseUrl}${path}`,
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                params: method.toLowerCase() === 'get' ? data : undefined,
                data: method.toLowerCase() === 'get' ? undefined : data
            });

            return response.data;
        } catch (error) {
            console.error('Error making request:', error.response ? error.response.data : error.message);
            throw error;
        }
    }

}

