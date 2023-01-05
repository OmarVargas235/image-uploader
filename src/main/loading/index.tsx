import Spinner from '../../layaut/Spinner';
import Text from '../../layaut/Text';
import { Container } from './styled';

const Loading = (): JSX.Element => {

    return (
        <Container>
            <Text
                className='mb-5'
                color='#4F4F4F'
                size='20px'
            >Cargando...</Text>

            <Spinner />
        </Container>
    )
}

export default Loading;