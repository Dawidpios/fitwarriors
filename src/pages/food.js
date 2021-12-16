import React from 'react';
const data = [
    {   id:0,
        name:"Grilowany kurczak z brązowym ryżem",
        Kcal:338 ,
        protein:26,
        carbs:40,
        fat:12,
        recipe:"Mięso posypać ulubionymi ziołami, przyprawić do smaku solą i pieprzem, położyć na ruszt i grillować do miękkości. Marchewkę zetrzeć na tarce i podawać polaną oliwą. Ryż ugotować w lekko osolonej wodzie."
    },
    {
        id:1,
        name:"Grilowany kurczak z brązowym ryżem",
        Kcal:338 ,
        protein:26,
        carbs:40,
        fat:12,
        recipe:"Mięso posypać ulubionymi ziołami, przyprawić do smaku solą i pieprzem, położyć na ruszt i grillować do miękkości. Marchewkę zetrzeć na tarce i podawać polaną oliwą. Ryż ugotować w lekko osolonej wodzie."


    },
    {
        id:2,
        name:"Tofu z makaronem i brokułami w sosie sojowym",
        Kcal:352,
        protein:28,
        carbs:48,
        fat:7,
        recipe:"Makaron zalać wrzątkiem na 5 minut. Uprzednio zblanszowane brokuły i kawałki tofu poddusić na patelni razem z oliwą i sosem sojowym, dodać gotowy makaron i przyprawić do smaku."


    },
    {
        id: 3,
        name:"Gotowana wołowina z surówką z buraka",
        Kcal:352 ,
        protein:36 ,
        carbs:18 ,
        fat:17 ,
        recipe:"Mięso ugotować w lekko osolonej wodzie z włoszczyną. Buraka ugotować, obrać ze skóry zetrzeć na tarce, dodać posiekaną cebulę i oliwę, wymieszać i przyprawić do smaku"

    },
    {
        id: 4,
        name:"Serek z awokado i pieczywem",
        Kcal:416 ,
        protein:23 ,
        carbs:42 ,
        fat:20,
      recipe:"Pomidory suszone drobno posiekać. Wymieszać pokrojone w kostkę awokado z pomidorem, kiełkami i serkiem, doprawić do smaku pieprzem i ziołami. Jeść z pieczywem."


    },
    {
        id: 5,
        name:"Kotlety z kaszy jaglanej ze szpinakiem i sosem tzatziki",
        Kcal:356 ,
        protein:12 ,
        carbs:44 ,
        fat:16 ,
        recipe:"Kaszę jaglaną ugotować, dodac rozdrobniony szpinak (odciśnięty z wody), przprawić solą, czosnkiem, dokładnie wymieszać. Uformować kotlety, obtoczyć w sezamie, smazyć na oleju. Do jogurtu dodać starty ogórek i przeciśnięty ząbek czosnku, doprawić solą do smaku. Kotlety podawać z przygotowanym sosem."


    },
    {
        id: 6,
        name:"Gotowane udko kurczaka z kaszą gryczaną i surówką z pora",
        Kcal:360 ,
        protein:23 ,
        carbs:45 ,
        fat:12 ,
        recipe:"Udko ugotować w wodzie z włoszczyną. Kaszę ugotować w lekko osolonej wodzie. Pora pokroić i dodać starte jabłko, calość wymieszać i przyprawić do smaku."


    },
    {
        id: 7,
        name:"Szaszłyk cielęcy z cukinią, ryż dziki",
        Kcal:355 ,
        protein:25 ,
        carbs:37 ,
        fat:14 ,
        recipe:"Mięso pokroić w kawałki, natrzeć ulubionymi ziołami, oprószyć solą i skropić oliwą. Cukinię umyć, pokroić na kawałki i nabijąć na szpatułki przemiennie z mięsem. Przygotowane szaszłyki następnie upiec w piekarniku (najlepiej na grillu). Ryż ugotować w lekko osolonej wodzie."


    },
    {
        id:8,
        name:"Omlet na maśle",
        Kcal:351,
        protein:19,
        carbs:24,
        fat:22,
        recipe:"Jajka wybić, wymieszać i smażyć na maśle, dodać kawałki papryki, gotowy omlet polać gęstym jogurtem naturalnym wymieszanym ze startym ogórkiem kiszonym."


    },
]
const Dishes = (props) =>(
    <div className="Dishes">
        <h1 className="Dishes_heading-primary">Wylosuj fit przepis</h1>
        <section className="Dishes_section">
            <div className="Dishes_text">
            {!props.foods ? <p className="Dishes_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus obcaecati optio qui dolores. Saepe, ut iusto. Facere, perferendis enim amet exercitationem, libero at pariatur dolores optio reiciendis, quia illum placeat?</p> : null}
            <h2 className="Dishes_heading-second">{props.foods ? props.data[props.index].name : null}</h2>
            <h3 className="Dishes_heading-third">{props.foods ? `Ilość kalorii w 100g : ` + props.data[props.index].Kcal + ` kcal` : null}</h3>
            <ul className="Dishes_list">
                <li className="Dishes_list-li">{props.foods ? `Białko: ` + props.data[props.index].protein : null}</li>
                <li className="Dishes_list-li">{props.foods ? `Węglowodany: ` +  props.data[props.index].carbs : null}</li>
                <li className="Dishes_list-li">{props.foods ? `Tłuszcze: ` + props.data[props.index].fat : null}</li> 
            </ul>
            <p>{props.foods ? `Przepis : ` + props.data[props.index].recipe : null}</p></div>
       
        </section>
    
        <div className="btn-container">
            <button className="btn-food" onClick={props.draw}>Losuj</button>
        <button className="btn-food" onClick={props.clear}>Wyczyść</button></div>
        
    </div>
)
 


class food extends React.Component{
  state={
      index: '',
      foods:false,
      
  }
getIndex(){
    this.setState({
        index: Math.floor(Math.random()*Object.entries(data).length) 
    })
    
    
    }
draw(){
    this.getIndex();
    this.setState({
        foods:true,
    })
    
}
clear(){
    this.setState({
        foods: false,
    })
}
    render(){
    return (<div className="food-view"> <div className="row">
        <div className="dishes-container">
        <Dishes  data={data} foods={this.state.foods}draw={this.draw.bind(this)} index={this.state.index} clear={this.clear.bind(this)}/></div>
    </div></div> );
}}
 
export default food ;
