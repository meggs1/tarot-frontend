import Loader from "react-loader-spinner"

const Spinner = () => {
    // debugger
    return (
      <div class="d-flex p-2">
        <Loader type="TailSpin"  color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
  
  export default Spinner