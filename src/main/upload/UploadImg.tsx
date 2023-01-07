import { ChangeEvent } from 'react';

import img from '../../assets/image-uploader.svg';

import Text from '../../layaut/Text';
import { ContainerUploader, Input } from './styled';

import fetchAPI from '../../fetchAPI';


interface Props {
    setUploading: (v: number) => void;
    setImg: (v: string) => void;
}

const UploadImg = ({ setUploading, setImg }: Props): JSX.Element => {

    const handleChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {

        const fileList = e.target.files;

        if (fileList === null) return;

        const file = fileList[0];
        const formData = new FormData();
        const reader = new FileReader();

        reader.readAsDataURL(file);
        formData.append("file", file);

        reader.onload = function(e) {

            typeof reader.result === 'string' && setImg(reader.result);
        };
        
        reader.onerror = function() {

            console.log(reader.error);
        };

        await fetchAPI.post('upload/upload-img', formData, {}, setUploading);
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