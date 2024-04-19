import { useQuery } from "@tanstack/react-query";
import { Card } from "../../components/common/Card/Card";
import { Header } from "../../components/common/Header";
import { Skeleton } from "../../components/common/Skeleton";
import { Grid } from "../../components/layout/Grid";
import { getPets } from "../../services/pets/getPets";
import styles from "./Pets.module.css";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";
import { usePetList } from "../../hooks/usePetList";

export const Pets = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data, isLoading } = usePetList({
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  })


  function changePage(page: number) {
    setSearchParams((params) => {
      params.set('page', String(page))
      return params
    })
  }
  return (
    <>
      <Grid>
        <div className={styles.container}>
          <Header />
          {isLoading && (
            <Skeleton count={5} containerClassName={styles.skeleton} />
          )}
          <main className={styles.list}>
            {data?.items.map((item, index) => (
              <Card
                key={index}
                href={`/pets/${item.id}`}
                text={item.name}
                thumb={item.photo}
              />
            ))}
          </main>
          {
            data?.currentPage && (
              <Pagination
              currentPage={data.currentPage}
              totalPages={data.totalPages}
              onPageChange={(number) => {
                changePage(number);
              }}
              />
            )}
        </div>
      </Grid>
    </>
  );
};
