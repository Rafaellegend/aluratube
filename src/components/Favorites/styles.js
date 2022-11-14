import styled from "styled-components";

export const StyledFavorites = styled.div`

section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
}
h2 {
    font-size: 16px;
    padding-left:30px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColorBase || "#222222"};
    
}
.favsicons {
    display: grid;
    max-width:100px;
    text-align: center;
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    span {
        text-overflow:ellipsis;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
    }
    
}
.addingfav {
        margin-left: 5px;
        border-radius: 100%;
        border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
        width:20px;
        height: 20px;
        background-color: ${({ theme }) => theme.textColorBase || "#222222"};
        color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
    }
`;

export const StyledRegisterFav = styled.div`
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

  .favpreview{
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
      padding-top: 40px;
      text-align: center;
      img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.borderBase}
      }
      p{
        text-overflow:ellipsis;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
      }
  }
`;