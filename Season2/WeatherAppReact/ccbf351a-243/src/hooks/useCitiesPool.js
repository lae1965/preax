import { useContext } from "react";
import { CitiesPoolContext } from "../context/CitiesPoolContext";

export const useCitiesPool = () => useContext(CitiesPoolContext);