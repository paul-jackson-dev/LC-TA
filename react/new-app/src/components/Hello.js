import styles from './Hello.module.css'

function Hello() {
    return(
       <div>
            <h1 className={styles.helloText}>
                Hi!
            </h1>
       </div>
    );
 }

 export default Hello;