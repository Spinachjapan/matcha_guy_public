import styles from "../styles/Layout.module.css"
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"








const Layout = ({children}) => {
    
  
  
  const { data: session } = useSession()





    
    let login_state = <ul className={styles.lap}>
    <li><Link href="#"><a onClick={() => signIn()} className={styles.a}> LOG IN</a></Link></li>
    <li><Link href="/"><a href="#" className = {styles.a} >HOME</a></Link></li>
    </ul>

let login_state_hidden = <div  className={styles.hidden_menu}>
<div><Link href="#"><a onClick={() => signIn()} className={styles.a}> LOG IN</a></Link></div>
<div><Link href="/"><a href="#" className = {styles.a} >HOME</a></Link></div>
</div>
    

   


              if(session) {
                     
             login_state = <ul className={styles.lap}>
             <li><Link href="#"><a href="#" onClick={() => signOut()} className={styles.a}> LOG OUT</a></Link></li>
           <li><Link href="/post_article"><a href="#" className={styles.a}>POST</a></Link></li>
           <li><Link href="/"><a href="#" className = {styles.a} >HOME</a></Link></li>
           </ul>

login_state_hidden = <div  className={styles.hidden_menu}>
<div><Link href="#"><a href="#" onClick={() => signOut()} className={styles.a}> LOG OUT</a></Link></div>
<div><Link href="/post_article"><a href="#" className={styles.a}>POST</a></Link></div>
<div><Link href="/"><a href="#" className = {styles.a} >HOME</a></Link></div>
</div>
          
          
        
        
        
        }



  



  return (
    <div>
   
      <body className={styles.body}>


    <header className={styles.header}>



      <div className={styles.logo}>
      <Link href="/"><a href="#" className = {styles.a} >Matcha Guy</a></Link>
      </div>



     




 <nav className={styles.nav}> 

          {login_state}  
      


<ul className={styles.menu}>
 <li style={{marginTop: 20}} >
<input id="check_input" className={styles.menu_cbox} type="checkbox"/>
  <label htmlFor="check_input" style={{marginRight: 10}}>MENU</label>
  {login_state_hidden}
</li>

</ul>

  

   



   
      </nav> 














    </header>

    <div className={styles.content}>
{children}
    </div>


<div className="center">
<button onClick={() => scrollTo(0, 0)} className={styles.topButton}>
▲TOP
</button>
</div>

  </body>
      

      
    


    </div>
  )
}

export default Layout