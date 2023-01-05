import { ChangeEvent } from 'react';

import img from '../../assets/image-uploader.svg';

import Text from '../../layaut/Text';
import { ContainerUploader, Input } from './styled';

const UploadImg = (): JSX.Element => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {

        const fileList = e.target.files;

        if (fileList === null) return;

        const file = fileList[0]; // lo que se enviara al servidor
        const reader = new FileReader();

        reader.readAsText(file);

        console.log(reader);

        reader.onload = function() {

            console.log(reader.result); // imagen para precargar
        };
        
        reader.onerror = function() {

            console.log(reader.error);
        };

        reader.onprogress = function(data) {

            console.log("data:", data);
            console.log(reader);
        };
    }

    return (
        <ContainerUploader className='position-relative'>
            <img src={img} alt='image-uploader' />

            <Text
                color='rgb(156 163 175/1)'
                size='.875rem'
                className='mt-3'
            >Drag & Drop your images here</Text>

            <Input
                type='file'
                className='position-absolute pointer'
                onChange={handleChange}
            />
        </ContainerUploader>
    );
}

export default UploadImg;