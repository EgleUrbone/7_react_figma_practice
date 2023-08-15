
import NumberedPoints from "./NumberedPoints";
import { pointsArr } from "./data";

export default function NumberedPointsList() {
  
  return (
    <div className="grid grid-cols-3 mx-36 gap-x-8 mb-24">
      {pointsArr.map((pObj) => (
        <NumberedPoints key={pObj.id} item={pObj} />
      ))}
    </div>
  )
}