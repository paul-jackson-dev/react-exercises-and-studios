import styles from './ChoresList.module.css'

export default function ChoresList () {
   let chores = ["Learn React", "Prepare for class"]
   return (
      <div>
         <h2>Chores!</h2>
         <p className={styles.choresText}>{chores[0]}</p>
         <p className={styles.choresText}>{chores[1]}</p>
      </div>
   );
}