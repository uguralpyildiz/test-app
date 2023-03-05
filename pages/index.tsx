import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
  useEffect(() => {
    const interval = setInterval(() => {
      const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setTime(timeString);
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return (
    <nav>
      <div className='navbar'>
        <h1 className='clock'>{time}</h1>
        <p>Welcome to my nextsite.</p>
      </div>
    </nav>
  )
}


const Content: React.FC = () => {
  return(
    <main className='container'>
      <h1>başlık</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni tenetur repudiandae consectetur eveniet, consequatur ipsa ullam. Fuga, voluptatum accusamus.</p>
    </main>
  )
}


const Footer: React.FC = () =>{
  return(
    <footer>
      <p>
        Telifhakları saklıdır
      </p>
    </footer>
  )
}

const index: React.FC = () =>{
  return(
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}


export default index;
