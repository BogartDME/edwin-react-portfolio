import React from "react";
import BogartLogo from "../../assets/images/BogartLogo.PNG"


function Main() {
    return (
<container className=" pl-20 flex flex-col items-center">
    <div className="justify-center">
        <img src={BogartLogo} alt="Man sitting at desk with three monitors" className="bogart-logo max-w-md"/>
    </div>

    <div className="flex-col items-center">
        <p className="py-12 text-2xl">
            "The creative adult is the child who survived." <br/>- ​​Ursula Le Guin
        </p>
    </div>
</container>
    );
}

    export default Main;