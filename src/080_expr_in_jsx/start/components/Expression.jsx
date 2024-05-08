import "./Expression.css";

const Expression = () =>{
    const title = "Expression";
    const arry = [`item1`,`item2`,`item3`];
    const hello = (arg) => `${arg} Function`;
    const jsx = <h3>Hello JSX</h3>;
    return (
        <div>
            <h3>Hello {title.toLocaleLowerCase}</h3>
            <h3>{arry}</h3>
            <h3>{hello(`Hello`)}</h3>
            <h3>{/*表示されない */}</h3>
            {<h3>Hello JSX</h3>}
            {jsx}
        </div>
    );
;} 
export default Expression;