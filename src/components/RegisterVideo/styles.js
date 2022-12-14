import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: inherit;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button[type="submit"] {
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    & > div {
      flex: 1;
      border-radius: 8px;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
    }
  }
  input {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  select {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  .vidpreview{
    padding: auto;
    display: flexbox;
    margin: 10px auto;
    width: 100%;
    flex: 1;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.borderBase};
      max-width: 250px;
      max-height:200px;
      background-color:  ${({ theme }) => theme.backgroundBase};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 10px;
      text-align: center;
      img{
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        max-width: 210px;
        height: auto;
        border-radius: 5%;
        border-radius: 5%;
        border: 1px solid ${({ theme }) => theme.borderBase}
      }
      p{
        text-overflow:ellipsis;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
      }
  }

`;