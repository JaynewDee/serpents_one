import React from 'react'

const Serpent = () => {

    const renderCount = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four"];



  return (
    <section className="one-line">
        {renderCount.map((num, index) => 
          (
            <>
            <span key={index} className={`line-top line-${index}`}>{'>'}</span>
            <span key={index} className={`line-top line-${index}`}>{'|'}</span>
            <span key={index} className={`line-top line-${index}`}>{'-'}</span>
            <span key={index} className={`line-top line-${index}`}>{'<'}</span>
            </>
          )
        )}
        </section>
  )
}

export default Serpent;