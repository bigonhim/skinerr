import React from 'react'

const SectionWrapper = (Component,idName) => 
    
    function HOC(){
        return(

        <div className='px-20'>
            <span className='hash-span' id={idName}> &nbsp;</span>
            <Component/>
        </div>
          
        )
    
    }
    
    
    

export default SectionWrapper
