import { useState } from 'react';
import { createGlobalStyle } from 'styled-components'

import Upload from './main/upload';
import Loading from './main/loading';
import Img from './main/img';
import Text from './layaut/Text';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: #E5E7EB;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
    }
`;

function App(): JSX.Element {

    const [uploading, setUploading] = useState<number>(0);
    const [img, setImg] = useState<string>('');

    return (<div style={{ padding: '40px 0' }}>
        <GlobalStyle />
        { uploading === 0 && <Upload setUploading={setUploading} setImg={setImg} /> }
        { (uploading > 0 && uploading < 100) && <Loading uploading={uploading} /> }
        { uploading === 100 && <Img img={img} /> }

        <div className='d-flex justify-content-center mt-3'>
            <Text
                className='mr-1'
                color='#6B7280'
            >created by</Text>

            <Text
                color='#6B7280'
                weight='bold'
                className='text-decoration-underline pointer'
            >Omar Vargas</Text>
        </div>
    </div>)
}

export default App;