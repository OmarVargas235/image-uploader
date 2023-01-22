import img from '../../assets/image-uploader.svg';

import Text from '../../layaut/Text';
import { ContainerUploader, Input } from './styled';
import { handleChange } from './utils';


interface Props {
    setUploading: (v: number) => void;
    setImg: (v: string) => void;
    setUrl: (v: string) => void;
}

const UploadImg = ({ setUploading, setImg, setUrl }: Props): JSX.Element => {

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
                onChange={(e) => {void handleChange(e, setImg, setUploading, setUrl)}}
            />
        </ContainerUploader>
    );
}

export default UploadImg;