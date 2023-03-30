import styled from "styled-components";
export const StyledDashboard = styled.div`
  border: 1px solid white;
  height: 100vh;
  background-color: #E6e6e6;
  padding: 40px 100px;

  div{
    display: flex;
    justify-content: space-between;
    font-size: 20px;

   

    
  }

  ul{
      margin-top: 10px;
      height: 500px;

      li{
        margin-top: 20px;
        padding: 4px 20px;
        height: 90px;
        border-radius: 100px;
        display: flex;
        background-color: white;

        .rigth-container{
          width: 20%;
          align-items: center;
          justify-content: space-around;
        }
        .left-container{
          width: 80%;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
  .modal-registerForm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label{
      font-size: 24px;
    }

    input{
      padding: 20px;
    }
  }
`;