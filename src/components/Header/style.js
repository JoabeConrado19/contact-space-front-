import styled from "styled-components";
export const StyledHeader = styled.header`

border: 1px solid red;
height: 90px;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);

display: flex;
justify-content: space-between;
align-items: center;
padding: 0 60px;

h1{
  color: white;
  font-size: 22px;
  font-weight: 900;
  font-family: sans-serif;
  cursor: pointer;
}

div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2{
    margin-right: 50px;
    color: white;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
  }

  button{
    padding: 6px 45px;
    background-color: #ff6496;
    color: white;
    border: none;
    font-weight: 900;
    border-radius: 45px;
    font-size: 20px;
    transition: 0.5s ease;
  }

  button:hover{
    background-color: transparent;
    color: white;
    border: white 1px solid;
    
  }

}
`;