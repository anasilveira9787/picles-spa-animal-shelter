import { Header } from "../../components/common/Header";
import thumb from "../../assets/thumb-default.jpg";
import styles from "./PetDetails.module.css";
import { Grid } from "../../components/layout/Grid";

export function PetDetails() {

  
  return (
      <Grid>
        <div className={styles.container}>
          <Header showReturn={true} />
          <main className={styles.content}>
            <img src={thumb} alt="" className={styles.picture} />
            <h1>Chico</h1>
            <span>Sobre o pet:</span>
            <p>Seu temperamento afetuoso e leal faz dele o amigo perfeito para aqueles que buscam uma conexão genuína com um animal de estimação. Ele adora receber carinho, retribuindo com lambidas calorosas e um olhar que transborda gratidão.</p>
          </main>


        </div>

      </Grid>
  )

}