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
            color: "#0D5257"
            }}>Payment summary</p>
            <p style={{
                fontFamily: 'Helvetica Neue',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#757575"
            }}>Returning 8.5kg cylinder</p>
            <p style={{
                fontFamily: 'Helvetica Neue',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#757575"}}>Replacing with 8.5kg cylinder</p>
            <div style={{display: "flex",justifyContent:"space-between",marginRight:"30px"}}>
                <div>
                    <p>Total</p>
                    <p>Including GST</p>
                </div>
                <div><p style={{
                fontSize: "36px",
                lineHeight: "30px",
                color: "#333333"
                }}>$ 28.95</p></div>
            </div>
        </div>
    )
}