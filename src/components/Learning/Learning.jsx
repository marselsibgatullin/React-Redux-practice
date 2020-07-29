import React from "react";
import style from './Learning.module.css';
import TechName from "./TechName/TechName";
import TechLinks from "./TechLinks/TechLinks";

const Learning = (props) => {
    let techNamesData = props.techsNames.map(n => <TechName id={n.id} techname={n.name}
                                                            key = {n.id} link={n.link}/>);

    let techLinksData = props.techsLinks.map(l => <TechLinks id={l.id} tech={l.name} key = {l.id}
                                                             img = {l.img} desc={l.desc}/>);
    return (
        <div className={style.content}>
            <div className={style.name}>
                {techNamesData}
            </div>
            <div className={style.links}>
                {techLinksData}
            </div>
        </div>

    )
}

export default Learning;