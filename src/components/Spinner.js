import Loader from "react-loader-spinner"

const Spinner = () => {
  return (
    <div class="d-flex justify-content-center">
      <Loader type="TailSpin"  color="#00BFFF" height={100} width={100} />
    </div>
  );
}
  
export default Spinner