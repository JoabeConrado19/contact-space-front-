import styled from "styled-components";
export const StyledLogin = styled.div`

  height: 600px;
  display: flex;
  justify-content: center;
  align-items:center ;
  flex-direction: column;

  h2{
    color: white;
    font-size: 40px;
    margin-top: -10px;
    margin-bottom: 20px;
  }
  p{
    margin-bottom: 40px;
    color: white;
    font-size: 22px;
  }


  form{
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 400px;
    border: 4px solid white;
    color: white;
    font-weight: 700;
    border-radius: 10px;
    padding: 30px 20px;
    font-size: 20px;

    

    input{
      padding: 16px 0;
      border-radius: 18px;
      outline: 0;
      border: none;
      margin: 20px 0 20px 0;
    }

    h6{
      margin-bottom: 17px;
      font-size: 20px;
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
    margin-top: 0px;

    }

    button:hover{
    background-color: transparent;
    color: white;
    border: white 1px solid;
    
    
  }
  }
`;