import { color } from "motion";
import { ClipLoader } from "react-spinners";

const Loading = ({loading})=>{
    const override = {
    display: "block",
    margin: "0 auto",
 
};

    return (
        <>
            <ClipLoader
       
            loading={loading}
            cssOverride={override}
            color="blue"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
      />
        </>
    );
}

export default Loading;