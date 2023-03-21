import styled from 'styled-components'

export const PageHeader = styled.div `
    display: flex;
    justify-content: center;
`
export const Modal = styled.div `
    margin: auto;
    width: 75%;
    border: 3px solid #1c5d99;
    padding: 10px;
    background: white;
    border-radius: 10px;
`

export const DirectionText = styled.h2 `
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: 20px;
`

export const Footer = styled.div `
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 4px;
    width: 100%
`

export const ErrorModal = styled.div `
    margin: auto;
    width: 75%;
    border: 3px solid red;
    padding: 10px;
    background: white;
    border-radius: 10px;
`
export const ErrorMessageText = styled.h2 `
    width: 100%;
    justify-content: center;
    display: flex;
    font-size: 24px;
    text-align: center;
    padding: 0px 0 4px 0;
    font-family: 'Helvetica', 'Arial', sans-serif;
    color: red;
`

export const InfoTextHeader = styled.h2`
width: 100%;
justify-content: center;
display: flex;
font-size: 20px;
text-align: center;
padding: 0px 0 4px 0;
font-family: 'Helvetica', 'Arial', sans-serif;
`

export const InfoText = styled.p`
text-align: center;
font-size: 12px;
font-family: 'Helvetica', 'Arial', sans-serif;
`

export const Name = styled.div `
    width: 100%;
    justify-content: center;
    display: flex;
    font-size: 24px;
    text-align: center;
    padding: 0px 0 4px 0;
    font-family: 'Helvetica', 'Arial', sans-serif;
    color: blue;
    cursor: pointer;
`
export const Phone = styled.div `
    width: 100%;
    justify-content: center;
    display: flex;
    font-size: 18px;
    padding: 4px 0 4px 0;
    text-align: center;
    font-family: 'Helvetica', 'Arial', sans-serif;
    color: blue;
    cursor: pointer;
`

export const Address = styled.div `
    width: 100%;
    justify-content: center;
    display: flex;
    font-size: 18px;
    padding: 4px 0 4px 0;
    text-align: center;
    font-family: 'Helvetica', 'Arial', sans-serif;
`

export const CloseButton = styled.div `
        width: 100%;
        justify-content: right;
        display: flex;
    `
export const RollAgainButton = styled.div `
        width: 100%;
        justify-content: center;
        display: flex;
        font-size: 18px;
        text-align: center;
        padding: 8px 0 8px 0;
    `