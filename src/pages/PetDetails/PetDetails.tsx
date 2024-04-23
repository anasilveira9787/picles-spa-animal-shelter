import { Header } from "../../components/common/Header";
import whatsapp from "../../assets/whatsapp.svg";
import styles from "./PetDetails.module.css";
import { Grid } from "../../components/layout/Grid";
import { Button } from "../../components/common/Button";
import { ButtonVariant } from "../../components/common/Button/Button.constants";
import { useQuery } from "@tanstack/react-query";
import { getPetById } from "../../services/pets/getPetById";
import { Link, useParams } from "react-router-dom";
import { ImageBase64 } from "../../components/common/ImageBase64/ImageBase64";
import Skeleton from "react-loading-skeleton";
import { useShelter } from "../../hooks/useShelter";

export function PetDetails() {
  const { id } = useParams();

  const { data: shelterData, isError: shelterIsError } = useShelter()

  const { data: petData, isLoading, isError: petIsError } = useQuery({
    queryKey: ['get-pet-by-id', id],
    queryFn: async () => {
      return await getPetById(id ?? '');
    }
  }
  )

  return (
    <Grid>
      <div className={styles.container}>
        <Header showReturn={true} />
        <main className={styles.content}>
          {
            isLoading && (
              <div className={styles.skeleton}>
                <Skeleton height={200} width={200} circle={true} />
                <Skeleton height={24} width={180} style={{ margin: 16 }} />
              </div>
            )
          }
          {
            !isLoading && (
              <>
                <ImageBase64 src={petData?.photo} alt="" className={styles.picture} />
                {petIsError && (
                  <>
                    <h1>Pet não encontrado</h1>
                    <Link to="/pets/">Voltar para a listagem</Link>
                  </>
                )}
                {
                  !petIsError && (
                    <>
                      <h1>{petData?.name}</h1>
                      <span>Sobre o pet:</span>
                      <p>{petData?.bio}</p>

                      {
                        !shelterIsError && (
                          <a href={``} target="_blank">
                            <Button variant={ButtonVariant.Text}>
                              <span className={styles.buttonWhatsapp}>
                              {<img src={whatsapp} />}
                              Entre em contato com o abrigo
                              </span>                              
                            </Button>
                          </a>
                        )
                      }
                    </>
                  )
                }
              </>
            )
          }
        </main>
      </div>
    </Grid>
  )

}