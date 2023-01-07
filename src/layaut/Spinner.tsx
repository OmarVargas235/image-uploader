import styled from "styled-components";

const Container = styled.div`
    height: 10px;
`;

const BackGround = styled.div`
    background-color: #F2F2F2;
    height: 100%;
    width: 100%;
    border-radius: 8px;
`;

const Bar = styled.div<{ uploading: number; }>`
    background-color: #2F80ED;
    height: 100%;
    width: ${props => `${props.uploading}%`};
    border-radius: 8px;
`;

interface Props {
    uploading: number;
}

const Spinner = ({ uploading }: Props): JSX.Element => {

    return <Container className="position-relative w-100">
        <BackGround className="position-absolute" />

        <Bar className="position-absolute" uploading={uploading} />
    </Container>;
}

export default Spinner;