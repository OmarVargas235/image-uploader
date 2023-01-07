interface Response<T> {
    data: T;
    messages: string;
    status: number;
}

type Body = BodyInit | null | undefined;

class Fetch {

    private readonly url: string = '';

    constructor(url: string) {

        this.url = url;
    }

    get = (): void => {

    }

    post = async (endpoint: string, body: Body, options?: RequestInit, setUpload=(v: number)=>{}): Promise<Response<null>> => {

        const response = await fetch(`${this.url}/upload/upload-img`, {
            method: 'POST',
            body,
            ...options,
        });

        if (response.body === null) return { data: null, messages: 'Intente nuevamente', status: 400 };

        const reader = response.body.getReader();
        const chunks = [];
        let receivedLength = 0;
        let cont = 1;

        while(true) {

            const { done, value } = await reader.read();
          
            if (done) {

                cont = 100;
                setUpload(cont);
                break;
            }

            chunks.push(value);
            receivedLength += value.length;
            cont++;

            setUpload(cont);
        }

        const chunksAll = new Uint8Array(receivedLength);
        let position = 0;

        for(const chunk of chunks) {
        
            chunksAll.set(chunk, position);
            position += chunk.length;
        }

        const result = new TextDecoder("utf-8").decode(chunksAll);
        const commits = JSON.parse(result);

        return commits;
    }
}

const fetchAPI = new Fetch('http://localhost:5000/api/1.0');

export default fetchAPI;