import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  font-size: 2rem;

  header,
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  ul {
    padding: 2rem;
  }

  li {
    list-style: none;
  }

  header a,
  footer a {
    text-decoration: none;
    color: black;
  }

  .active {
    color: red;
  }
`;
