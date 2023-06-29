
// Inline Style.......

// import React from 'react'
// const Header=() =>{
//     const headerStyle={
//         backgroundColor:"mediumblue",
//          color:"white"}
//     return (
//         <header style={headerStyle}>
//             <h1>To do List</h1>
//         </header>
//     )
// }

// export default Header;



import React from 'react'
// const Header=(props) =>{
const Header=({title}) =>{

    return (
        <header>
            {/* <h1>{props.title}</h1> */}
            <h1>{title}</h1>
        </header>
    )
}
Header.defaultProps={
    title: "To Do List"
}
export default Header;