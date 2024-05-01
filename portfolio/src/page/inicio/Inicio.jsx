/** @format */

import Header from "../../components/Header";
import * as S from "./styled";
import exemplo from "../../assets/foto.png";

export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.BoxInicio>
          <div>
          <h2>Olá meu nome é Jaqueline sou dev Front-End</h2>
          <p>
          Faça da sua vida mais "Responsivo"
            </p>
            <S.Cv><a href={exemplo} target="blank">Currículo</a></S.Cv>
            </div>
          <img src="" alt="" />
        </S.BoxInicio>
      </S.Container>
    </S.Main>
  );
}
