function Header(props){
  return (<header>
    <button className="headerItem" >app 1 {props.test ? props.test : "your mom not hot"}</button>
    <button className="headerItem" >app 2 {props.test ? props.test : "your mom not hot"}</button>
    <button className="headerItem" >app 3 {props.test ? props.test : "your mom not hot"}</button>
    <button className="headerItem" >app 4 {props.test ? props.test : "your mom not hot"}</button>
  </header>
  );
}

export default Header;
