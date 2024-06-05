import SystemIcons from "./SystemIcons";
import HomeIcons from "./HomeIcons";
import VersesIcons from "./VersesIcon";
import AudioIcons from "./AudioIcons";

export default function Icons() {
    return (
        <div className="hidden">
            <SystemIcons />
            <HomeIcons />
            <VersesIcons />
            <AudioIcons />
        </div>
    );
}
