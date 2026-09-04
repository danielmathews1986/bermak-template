import styled from "styled-components";
import fondo from "./assets/images/bg-ali.avif";

export const Container = styled.div`
  width: 100%;
  height: 500px;

  background-image: url(${fondo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
