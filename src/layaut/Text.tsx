import styled from 'styled-components';

interface IText {
    color?: string;
    size?: string;
    weight?: string;
}

const Text = styled.p<IText>`
    color: ${props => props.color ?? 'black'};
    font-size: ${props => props.size ?? '16px'};
    font-weight: ${props => props.weight ?? 'normal'};
`;

export default Text;