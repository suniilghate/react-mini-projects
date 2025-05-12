import BHClock from "./BHClock";
import BHClockText from "./BHClockText";

function BHClockBody() {
    return (
        <div class="card-body">
            <BHClockText/>
            <BHClock/>
        </div>
    )
}

export default BHClockBody;