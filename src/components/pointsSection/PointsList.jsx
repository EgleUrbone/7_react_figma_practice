import SinglePoint from "./SinglePoint";
import { pointsArr } from "./data";

export default function PointsList() {
  
  return (
    <div className="grid grid-cols-3 mx-36 gap-x-8 mb-24">
      {pointsArr.map((pObj) => (
        <SinglePoint key={pObj.id} item={pObj} />
      ))}
    </div>
  )
}