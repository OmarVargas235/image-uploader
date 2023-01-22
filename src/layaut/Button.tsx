import styled from "styled-components";

const ButtonPage = styled.button`
    background-color: #3B82F6;
    font-size: 1rem;
    line-height: 1.25rem;
    border: none;
    cursor: pointer;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.5rem;
    color: rgb(255 255 255/1);
    transition: .15s background-color cubic-bezier(.4,0,.2,1);

    &:hover {
        background-color: rgb(96 165 250/1);
    }
`;

interface Props {
    children: string;
    className?: string;
    handleClick?: ()=>void;
}

const Button = ({ children, className, handleClick=()=>{} }: Props): JSX.Element => {

    return <ButtonPage
        className={className}
        onClick={handleClick}
    >{children}</ButtonPage>;
}

export default Button;