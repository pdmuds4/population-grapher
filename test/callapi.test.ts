import { callAPI } from "../lib/utils/callAPI";

test("check", () => {
    const data = callAPI("", "GET")
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log("error");
        });
})