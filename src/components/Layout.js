import "./Layout.css";
function Layout (props){
    return <div>
        <header className="header"><h1>MUSIC UP!</h1></header>
        {props.children}
    </div>
}
export default Layout;