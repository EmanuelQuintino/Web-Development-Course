import styled from 'styled-components'

export const Container = styled.section `
    border: .2rem solid ${({theme}) => theme.colors.neutralE};
    background: #F5F5F588;
    border-radius: .8rem;

    padding: 1.2rem;

    section + section {
        margin-top: 1.6rem;
    }
    
    section {
        position: relative;
    }

    label {
        font-size: 1.2rem;
        line-height: 2.4rem;
        cursor: pointer;
    }
    
    section > input, select {
        width: 100%;  
        padding: .2rem .8rem;
        border: .1rem solid ${({theme}) => theme.colors.neutralB};
    }

    section > input:focus, select:focus {
        width: 100%;  
        padding: .2rem .8rem;
        outline: .1rem solid orange;
        border: .1rem solid orange;
    }

    .error {
        color: red;
        display: block;
        position: absolute;
        font-size: 1.0rem;
        margin-top: .2rem;
    }

    .radioGender div:first-child {
        font-size: 1.2rem;
    }

    .radioGender span {
        margin: 0 1.6rem 0 0;
    }

    .radioGender label {
        margin: 0 0 -0.4rem .4rem;
    }

    button {
        width: 100%;
        margin-top: 3.2rem;
        border: none;
        border-radius: .4rem;
        padding: .4rem;
        font-size: 1.2rem;
        font-weight: 600;
        background: #008080;
        color: white;
    }
    
    button:hover {
        background: #007070;
        
    }
`; 