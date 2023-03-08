import styled from "styled-components";

export const Container = styled.section`
    .titleSearch {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .inputSection {
        position: relative;
    }

    .labelInputSearch {
        position: absolute;
        bottom: .2rem;
        left: .8rem;
        pointer-events: none;
        transition: 400ms;
        padding: 0 .4rem;
        color: ${({theme}) => theme.colors.neutralA};
        font-size: 1.2rem;
    }

    .srOnly {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        overflow: hidden;
        color: transparent;
    }
    
    #inputSearchStudent {
        width: 100%;
        background: none;
        border: .1rem solid ${({theme}) => theme.colors.neutral8};
        padding: .4rem 1.2rem .2rem;
        border-radius: .4rem;
        font-size: 1.2rem;
        color: ${({theme}) => theme.colors.neutral6};
    }
    
    #inputSearchStudent:focus {
        outline: .1rem solid ${({theme}) => theme.colors.complementary3};
        border: .1rem solid ${({theme}) => theme.colors.complementary3};
    }
    
    #inputSearchStudent:not(:placeholder-shown) + .labelInputSearch,
    #inputSearchStudent:focus + .labelInputSearch {
        bottom: 1.8rem;
        font-size: .9rem;
        background: white;
        color: ${({theme}) => theme.colors.neutral6};
    }

    .searchIcon {
        position: absolute;
        bottom: .8rem;
        right: 1.6rem;
        font-size: 1.0rem;
        color: ${({theme}) => theme.colors.neutral8};
    }

    .tableStudents {
        margin-top: 1.6rem;
    }

    .tableStudents table {
        font-size: .8rem;
    }

    th, td {
        text-align: center;
    }

    tr td:nth-child(2) {
        text-align: start;
    }

    .editIcon {
        font-size: 1.2rem;
        cursor: pointer;
    }

    .form-modal {
        color: red;
    }
`;