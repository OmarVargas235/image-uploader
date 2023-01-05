import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
    width: 415px;
    padding: 2.5rem 1.25rem;
    border-radius: 0.5rem;
    background-color: white;
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
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
`;