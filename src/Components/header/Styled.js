import styled from "styled-components";

export const HeaderParent = styled.div`
background: #0404b1;
color: #fff;
`
export const Container = styled.div`
padding: 10px 15px 0;
`
export const TopHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Phone = styled.h4`
margin: 0;
@media(max-width: 767px) {
    display: none;
}
`
export const Info = styled.p`
font-weight: bold;
margin: 0;
@media(max-width: 767px) {
    display: none;
}
`
export const Login = styled.button`
background: transparent;
color: #fff;
border: none;
font-size: 16px;
cursor: pointer;
    > svg {
        margin: 0 5px 0 ;
    }
`
export const Icon = styled.div`
font-size: 20px;
cursor: pointer;
display: none;
@media(max-width: 767px) {
    display: flex;
}
`
export const MetHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 0;
@media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
`
export const Card = styled.div`
cursor: pointer;
font-size: 25px;
@media (max-width: 767px) {
    margin: 10px 5px
}
`
export const Nav = styled.nav`
background: #ddd;
padding: 0;
margin: 0;
display: flex;
justify-content: center;
    @media (max-width: 767px) {
        display: none;
    }
`