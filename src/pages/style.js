import styled from "styled-components";
export const StyledLandingPage = styled.div`

 
  display: flex;
  padding: 40px 100px;

  .div-right{
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 500px;
    }
  }
  .div-left{
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2{
      color: white;
      font-size: 48px;
      font-weight: 900;
      margin-bottom: 50px;
      margin-top: 90px;
    }

    p{
      color: white;
      font-weight: 100;
      margin-bottom: 50px;
      font-size: 20px;
    }

    button{
      margin-bottom: 100px;
      padding: 10px 85px;
      
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