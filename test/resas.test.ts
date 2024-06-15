import { prefecture } from "lib/types/Resas";
import Resas from "../lib/repository/Resas";

test("check", async() => {
    const resas = new Resas("apitoken");
    const data = await resas.getPopulationComps(1, 0);
    console.log(data);
})