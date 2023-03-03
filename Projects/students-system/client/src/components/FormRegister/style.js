import styled from 'styled-components'

export const Form = styled.form `
    & section {
        margin-top: 1.6rem;
        position: relative;
    }

    & label {
        line-height: 2.4rem;
        cursor: pointer;
    }
    
    & section > input, select {
        width: 100%;  
        padding: .2rem .8rem;
    }

    .error {
        color: red;
        display: block;
        position: absolute;
        font-size: 1.2rem;
        margin-top: .2rem;
    }

    .radioGender span {
        margin: 0 1.6rem 0 0;
    }

    & button {
        width: 100%;
        margin-top: 2.4rem;
    }
`; 