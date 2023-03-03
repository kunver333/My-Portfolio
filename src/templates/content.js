import React from 'react';
function Content(){
    return(
        <>
        <div className='content'>
        <h1 className='info'>Hey there!
        <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> <br />
        I'm <strong id='name'>Kunver Sudhanshu </strong><br />
        Aspiring <strong id='strng'>Web Developer</strong></h1>
        <button className="btn"><h2 id='h2'>Explore Works</h2></button>
        </div> 
        </>
    )
}
export default Content;