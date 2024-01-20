import React, { useState } from "react";


const App = () => {

    const [num, setnum] = useState(0);

    const Increm = () => {
        // console.log('clicked');
        setnum(num + 1);
    }


    const Decrem = () => {
        // console.log('clicked');

        if (num >0){
        setnum(num - 1);
    }else {
        setnum(0);
        alert('Sorry , You Reached Zero.')
    }
    }
    




    return (

        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>{num}</h1>
                    <br />
                  
                    <button className="button_one" onClick={Increm}> Increm </button>
                    <button className="button_two" onClick={Decrem}> Decrem </button>

                </div>

            </div>

        </>
    );
};
export default App;