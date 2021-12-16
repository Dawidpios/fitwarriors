import React from 'react';


const CalcResult = (props) => {
   
    return ( <div className="Calc_result">
<p className="paragraph">{!props.result ? `Wypisz wszystkie rubryki by obliczyć wyniki zapotrzebowania kalorycznego` : null}</p>
<p className="Calc_paragraph">{props.result ?  `Zapotrzebowanie by zredukować mase: ` + (props.result - 500) + ` kcal` : null } </p>
<p className="Calc_paragraph">{props.result ? `Zapotrzebowanie by utrzymać mase: ` + (props.result ) + ` kcal` : null } </p>
<p className="Calc_paragraph">{props.result ? `Zapotrzebowanie by zwiększyć mase: ` + (props.result + 500) + ` kcal` : null } </p>
    </div> );
}
 
export default CalcResult;