import {ReactComponent as WorkIcon} from "../icon/work.svg";
import { timelinesData } from "../data/timelinesData";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import './timeline.css';

const Timeline = () => {
    return (
        <div>
            <h1 className="title">TIMELINE</h1>
            <VerticalTimeline>
                {
                    timelinesData.map((data)=>{
                        return(
                            <VerticalTimelineElement
                                key={data.key}
                                icon={<WorkIcon/>}
                                iconStyle={{background: 'rgb(36, 224, 174)'}}
                                date={data.date}
                                dateClassName="date"
                            >
                                <h3 className="vertical-timeline-element-title"
                                    // style={{margin: "10px 0 0 0 !important"}}
                                >{data.title}</h3>
                                <h5 className="Vertical-timeline-element-subtitle">{data.location}</h5>
                                <h5 className="Vertical-timeline-element-subtitle">{data.company}</h5>
                                <p id="description">{data.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;