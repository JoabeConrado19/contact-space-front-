import styled from "styled-components";
export const StyledRegister = styled.div`

  height: 600px;
  display: flex;
  justify-content: center;
  align-items:center ;
  flex-direction: column;

  h2{
    color: white;
    font-size: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  p{
    margin-bottom: 5px;
    color: white;
    font-size: 22px;
  }


  form{
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 520px;
    border: 4px solid white;
    color: white;
    font-weight: 700;
    border-radius: 10px;
    padding: 20px 20px;
    font-size: 18px;

    

    input{
      padding: 10px 0;
      border-radius: 18px;
      outline: 0;
      border: none;
      margin: 10px 0 10px 0;
    }

    h6{
      font-size: 12px;
      color: red;
      font-weight: 100;
    }

    button{
      padding: 8px 0;
    

    background-color: #ff6496;
    color: white;
    border: none;
    font-weight: 900;
    border-radius: 45px;
    font-size: 20px;
    transition: 0.5s ease;
    margin-top: 5px;

    }

    button:hover{
    background-color: transparent;
    color: white;
    border: white 1px solid;
    
    
  }
  }
`;