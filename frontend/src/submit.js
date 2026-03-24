// submit.js

// export const SubmitButton = () => {

//     return (
//         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <button type="submit">Submit</button>
//         </div>
//     );
// }


export const SubmitButton = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px'
        }}>
            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#2563eb",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}
            >
                Submit
            </button>
        </div>
    );
};
