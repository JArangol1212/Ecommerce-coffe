import { FilterOrigin } from "./filter-origin";
import { FilterTaste } from "./filter-taste";


type filterControlsCategoryProps = {
  setFilterOrigin:(origin:string) =>void
  setFilterTaste:(taste:string) =>void
}


export function FilterControlsCategory(props:filterControlsCategoryProps){

      const {setFilterOrigin} = props;
      const {setFilterTaste} = props

      return (

            <div className="sm:w-[350px] sm:mt-5 p-6">

                  <FilterOrigin setFilterOrigin={setFilterOrigin}/>
                  <FilterTaste setFilterTaste={setFilterTaste}></FilterTaste>
            </div>
      )
}