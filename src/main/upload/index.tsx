import Text from '../../layaut/Text';
import Button from '../../layaut/Button';
import { Container, Input } from './styled';
import UploadImg from './UploadImg';

const Upload = (): JSX.Element => {

    return (
        <Container>
            <Text
                size='1.25rem'
                weight='500'
                className='text-center mb-4'
            >Upload your image</Text>

            <Text
                color='#6B7280'
                size='12px'
                className='text-center mb-5'
            >File should be .jpeg, .png</Text>

            <UploadImg />

            <Text
                color='rgb(156 163 175/1)'
                size='.75rem'
                className='text-center'
            >Or</Text>

            <div
                className='w-100 d-flex justify-content-center mt-3'
            >
                <div className='position-relative'>
                    <Button
                        className='text-center'
                    >Choose a file</Button>

                    <Input type='file' className='position-absolute pointer' />
                </div>

            </div>
        </Container>
    );
}

export default Upload;