import { createGlobalStyle } from 'styled-components'

import Upload from './main/upload';
import Loading from './main/loading';

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

    return (<>
        <GlobalStyle />
        <Upload />
        {/* <Loading /> */}
    </>)
}

export default App;