
import { $loading, setLoading } from "./index";

$loading
    .on(setLoading, (_, newLoading) => {
        return newLoading;
    })
