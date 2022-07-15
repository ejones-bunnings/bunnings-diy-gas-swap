import React from "react"

export default function PaymentSummary () {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "16px"
        }}>
            <p style={{
            fontFamily: 'Futura Std',
            fontSize: "17px",
            lineHeight: "24px",
            letterSpacing: "0.4px",
            color: "#0D5257",
            }}>Payment summary</p>
            <p style={{
                fontFamily: 'Helvetica Neue',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#757575",
                marginTop: '0',
                marginBottom: '0'
            }}>Returning 8.5kg cylinder</p>
            <p style={{
                fontFamily: 'Helvetica Neue',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                marginTop: '10px',
                lineHeight: "20px",
                marginBottom: '0',
                color: "#757575"}}>Replacing with 8.5kg cylinder</p>
            <div style={{display: "flex",justifyContent:"space-between",marginRight:"30px"}}>
                <div>
                    <p style={{
                        /* Product Name */
                    fontFamily: 'Helvetica Neue',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#333333",
                    marginBottom: '0'
                    }}>Total</p>
                    <p style={{
                fontFamily: 'Helvetica Neue',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                marginTop: '10px',
                color: "#757575"}}>Including GST</p>
                </div>
                <div style={{position:'relative'}}>
                <p 
                style={{
                fontFamily: 'Challenge For Bunnings',
                alignItems: "center",
                fontSize: "36px",
                lineHeight: "30px",
                color: "#333333"
                }}><span style={{lineHeight: '10px',fontSize: '20px',position:'absolute',top:'40px',left:'-20px'}}>$</span>  28.95</p></div>
            </div>
        </div>
    )
}