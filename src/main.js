import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type){
    const colors = {
        "visa": ["#436D99","#2D57F2"],
        "mastercard": ["#C69347", "#EB5757"],
        "dinersclubinternational": ["#234B8D", "#BDBDBD"],
        "mastercardcircus": ["#234B8D","#0099DF"],
        "default":["black", "gray"]
    }
    ccBgColor01.setAttribute("fill", colors[type][0])
    ccBgColor02.setAttribute("fill", colors[type][1])
    ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType

//security code
const securityCode = document.querySelector('#security-code')
const securityCodePattern ={
    mask: "0000",
}

const securityCodeMasked = IMask(securityCode, securityCodePattern)