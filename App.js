const heading = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h2", {},"I am h2 tag"),React.createElement("h1", {},"I am h1 tag")]))
const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(heading)