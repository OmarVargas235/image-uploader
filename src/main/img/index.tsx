import Text from '../../layaut/Text';
import { Container, Input, ContainerCopy } from './styled';
import Swal from 'sweetalert2';

import check from '../../assets/check.svg';
import copy from '../../assets/copy.svg';

interface Props {
    img: string;
    url: string;
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
});

const ImgUpload = ({ img, url }: Props): JSX.Element => {

    const copyUrl = (): void => {

        const aux = document.createElement("input");

        aux.setAttribute("value", url);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);

        void Toast.fire({
            icon: 'success',
            title: 'Copied to clipboard'
        });
    }

    return (
        <Container className='d-flex flex-column align-items-center'>
            <img src={check} alt='check' />

            <Text
                size='1.25rem'
                weight='500'
                className='text-center mb-4 mt-3'
            >Uploaded successfully!</Text>

            <img src={img} alt='image' className='w-100' />

            <div
                className='w-100 d-flex justify-content-center mt-3'
            >
                <Input
                    type='text'
                    value={url}
                    className='w-100'
                    disabled
                />

                <ContainerCopy
                    className='pointer d-flex justify-content-center align-items-center'
                    onClick={copyUrl}
                >
                    <img src={copy} alt='copy' />
                </ContainerCopy>
            </div>
        </Container>
    );
}

export default ImgUpload;