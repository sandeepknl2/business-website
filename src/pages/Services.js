import {services} from "../utils/constants";

export default ()=>(
<div className="grid">
 {services.map(s=><div className="card">{s}</div>)}
</div>
)