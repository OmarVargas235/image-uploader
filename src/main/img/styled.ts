import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
    width: 415px;
    padding: 2.5rem 1.25rem;
    border-radius: 0.5rem;
    background-color: white;

    .copy {
        
    }
`;

export const ContainerUploader = styled.div`
    margin: 20px;
    background-color: rgb(246 248 251/1);
    border: 2px dashed rgb(163 197 245/1);
    border-radius: 0.375rem;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: none;
    background-color: rgb(229 231 235 / 1);
    padding: .25rem .5rem;
    font-size: 18px;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
`;

export const ContainerCopy = styled.div`
    width: 32px;
    height: 32px;
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    background-color: #225AD7;

    &:hover {
        background-color: rgb(96 165 250/1);
    }
`;