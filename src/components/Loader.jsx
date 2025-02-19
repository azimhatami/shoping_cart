import BeatLoader from "react-spinners/BeatLoader";

function Loader() {
  return(
    <div className='flex items-center m-auto'>
      <BeatLoader
        color="#ec1313"
        loading
        size={24}
        margin={8}
      />
    </div>
  );
}


export default Loader
