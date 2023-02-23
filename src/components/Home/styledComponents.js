import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: linear-gradient(to left, #ffbf1f, #0f172a);
  display: flex;
  justify-content: center;
  //   align-items: flex-start;
  align-items: center;
  //   background-color: lightgreen;
  @media (min-width: 968px) {
    height: 100vh;
    align-items: center;
  }
`

export const LeftContainer = styled.div`
  width: 40vw;
  height: 50vh;
  background-color: #ffbf1f;
  border-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  @media (min-width: 950px) {
    height: 80vh;
  }
`
export const AddingWordsList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #0f172a;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
  text-align: left;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 950px) {
    justify-content: center;
  }
`

export const RightContainer = styled.div`
  width: 40vw;
  height: 50vh;
  background-color: #0f172a;
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //   @media (max-width: 968px) and (min-width: 368px) {
  //     height: 45vh;
  //   }
  @media (min-width: 950px) {
    height: 80vh;
  }
`

export const RightHeading = styled.h1`
  font-size: 15px;
  color: #ffbf1f;
  font-family: roboto;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`

export const LeftHeading = styled(RightHeading)`
  font-size: 15px;
  color: #0f172a;
  font-family: roboto;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`

export const FormContainer = styled.form`
  width: 30vw;
  height: 8vh;
  //   background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 32vw;
    font-size: 30px;
    height: 45px;
    flex-direction: row;
  }
`

export const Input = styled.input`
  width: 30vw;
  height: 25px;
  border-radius: 5px;
  background-color: white;
  padding-left: 10px;
  font-size: 8px;
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 22vw;
    height: 25px;
    @media (min-width: 900px) {
      font-size: 20px;
      height: 45px;
    }
  }
`

export const Button = styled.button`
  width: 40px;
  height: 25px;
  background-color: #ffbf1f;
  border-radius: 5px;
  border: 0px;
  font-size: 10px;
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 80px;
    font-size: 20px;
    height: 45px;
  }
`
export const IMG = styled.img`
  width: 30vw;
  height: 15vh;
  margin-top: 30px;
  //   @media (min-width: 368px) and (max-width: 968px) {
  //     width: 35vw;
  //     height: 10vh;
  //     margin-top: 100px;
  //   }
  @media (min-width: 968px) {
    width: 30vw;
    height: 25vh;
    margin-top: 40px;
  }
`
