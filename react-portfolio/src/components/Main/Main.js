import React from "react";
import BogartLogo from "../../assets/images/BogartLogo.PNG"


export default function Main() {
    return (
<container className=" pl-20 flex flex-col items-center object-scale-down">
    <div className="justify-center">
        <img src={BogartLogo} alt="Man sitting at desk with three monitors" className="bogart-logo object-contain h-48 w-96 object-scale-down"/>
    </div>

    <div className="flex-col items-center">
        <p className="py-12 text-xl">
            "The creative adult is the child who survived." <br/>- ​​Ursula Le Guin
        </p>
    </div>
</container>
    );
}

