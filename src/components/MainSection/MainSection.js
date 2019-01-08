import React from 'react';

const mainSection = () => {
    const styles = {
        color: "blue", 
        backgroundColor: "orange",
        fontSize: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
    }

    let firstName = "Rakshit";
    let lastName = "Sinha";

    return (
        <main>
            <h1 style={styles}>
                Welcome Mr. {firstName+" "+lastName}
            </h1>
        </main>
    );

}

export default mainSection;