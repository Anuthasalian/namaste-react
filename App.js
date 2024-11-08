

const parent=React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement(
        "div",{id:"child"},
       [ React.createElement("h1",{},"I'm H1"), React.createElement("h2",{},"I'm H2")]
    ), React.createElement(
        "div",{id:"child2"},
       [ React.createElement("h1",{},"I'm H1"), React.createElement("h2",{},"I'm H2")]
    )]
);

// const heading= React.createElement("h1",{id:"heading"},"Hello World!");

console.log(parent);  //object

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);