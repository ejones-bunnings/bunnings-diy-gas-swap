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
            <div style={{display: "flex"}}>
                <div>
                    <p>Total</p>
                    <p>Including GST</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}