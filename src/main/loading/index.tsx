import Spinner from '../../layaut/Spinner';
import Text from '../../layaut/Text';
import { Container } from './styled';

interface Props {
    uploading: number;
}

const Loading = ({ uploading }: Props): JSX.Element => {

    return (
        <Container>
            <Text
                className='mb-5'
                color='#4F4F4F'
                size='20px'
            >Cargando...</Text>

            <Spinner uploading={uploading} />
        </Container>
    )
}

export default Loading;